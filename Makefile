-include .env.local
export

dev:
	bun build src.js --outdir public --target browser --watch & CONFIG_PATH="$(CONFIG_PATH)" SSH_KNOWN_HOSTS="$(SSH_KNOWN_HOSTS)" go run .

build-client:
	bun build src.js --outdir public --target browser

build-backend:
	go build -ldflags="-s -w" -o program ./main.go

build-docker:
	docker build -t antost360/web-shell-client:latest .

build:
	make build-client && make build-backend

run-docker:
	docker run -p 3000:3000 -v "/Users/antoni-ostrowski/.ssh/known_hosts:/app/config/known_hosts" -v "./dev/config.json:/app/config/config.json" antost360/web-shell-client:latest

.PHONY: dev build-client build-backend build-docker build run-docker
