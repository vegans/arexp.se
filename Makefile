foo:
	echo bar

update:
	git pull
	docker-compose build
	docker-compose down -v
	docker-compose up -d
