foo:
	echo bar

update:
	git pull
	docker-compose build
	docker-compose down
	docker-compose up -d
