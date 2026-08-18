.PHONY: dev build-client build-backend build-docker build

dev:
	bun build src.js --outdir public --target browser --watch & go run .

build-client:
	bun build src.js --outdir public --target browser

build-backend:
	go build -ldflags="-s -w" -o program ./main.go

build-docker:
	docker build -t antost360/web-shell-client:latest .

build:
	make build-client && make build-backend

run-docker:
	docker run -p 3000:3000 -e SHELL=docker -e SERVER_USER=antoni-ostrowski antost360/web-shell-client:latest
