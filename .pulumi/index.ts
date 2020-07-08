import * as pulumi from '@pulumi/pulumi';
import * as docker from '@pulumi/docker';
import * as k8s from '@pulumi/kubernetes';
import * as digitalocean from '@pulumi/digitalocean';
import { provider } from './provider'

const config = new pulumi.Config();

export const domainName = config.require('domainName');
const domainNameWww = pulumi.interpolate`www.${domainName}`
export const appName = config.require('appName');
const appLabels = { app: appName };

const domain = new digitalocean.Domain(appName, {
  name: domainName,
});

const registry = new digitalocean.ContainerRegistry(appName)

const credentials = new digitalocean.ContainerRegistryDockerCredentials(appName, {
  registryName: registry.name,
});

const image = new docker.Image(appName, {
  build: '../',
  imageName: appName,
  registry: ???,
})
    
export const cred = credentials.dockerCredentials

const deployment = new k8s.apps.v1.Deployment(
  appName,
  {
    spec: {
      selector: { matchLabels: appLabels },
      replicas: 1,
      template: {
        metadata: { labels: appLabels },
        spec: {
          containers: [
            {
              name: appName,
              image: image.id,
              env: [
                {
                  name: 'NODE_ENV',
                  value: 'production',
                },
              ]
            },
          ],
        },
      },
    },
  },
  { provider },
);

const service = new k8s.core.v1.Service(appName, {
  metadata: { labels: deployment.spec.template.metadata.labels },
  spec: {
      type: 'LoadBalancer',
      ports: [{ port: 3000, targetPort: 3000, protocol: 'TCP' }],
      selector: appLabels
  }
},{ provider });

const ingress = new k8s.networking.v1beta1.Ingress(appName,
  {
    metadata: {
      labels: appLabels,
      annotations: {
        'cert-manager.io/issuer': 'letsencrypt-prod',
        'kubernetes.io/ingress.class': 'nginx',
      },
    },
    spec: {
      tls: [
        {
          hosts: [domainName, domainNameWww],
          secretName: `${appName}-tls`
        }
      ],
      rules: [
        {
          host: domainName,
          http: {
            paths: [
              {
                path: '/',
                backend: {
                  serviceName: service.metadata.name,
                  servicePort: 3000,
                }
              },
            ],
          },
        }
      ]
    }
  },
  {provider: provider}
);
