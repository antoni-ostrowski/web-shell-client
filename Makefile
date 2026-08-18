.PHONY: dev build-client build-backend build-docker

dev:
	bun build src.js --outdir public --target browser --watch & go run .

build-client:
	bun build src.js --outdir public --target browser

build-backend:
	go build -ldflags="-s -w" -o program ./main.go

build-docker:
	docker build -t antost360/web-shell-client:latest .

run-docker:
	docker run -p 3000:3000 -e SHELL=docker -e SERVER_USER=antoni-ostrowski antost360/web-shell-client:latest
