-include .env.local
export

dev:
	air

build-client:
	bun build src.js --outdir public --target browser

build-backend:
	go build -ldflags="-s -w" -o program ./main.go

build-docker:
	docker build -t antost360/web-ssh:latest .

build:
ttt	make build-client && make build-backend

run-docker:
	docker run -p 3000:3000 -v "/Users/antoni-ostrowski/.ssh/known_hosts:/app/config/known_hosts" -v "./dev/config.json:/app/config/config.json" antost360/web-shell-client:latest

.PHONY: dev build-client build-backend build-docker build run-docker
