-include .env.local
export

dev:
	bun build src.js --outdir public --target browser --watch & SERVER_USER="$(SERVER_USER)" SSH_PASSWORD="$(SSH_PASSWORD)" SSH_HOST="$(SSH_HOST)" go run .

build-client:
	bun build src.js --outdir public --target browser

build-backend:
	go build -ldflags="-s -w" -o program ./main.go

build-docker:
	docker build -t antost360/web-shell-client:latest .

build:
	make build-client && make build-backend

run-docker:
	docker run -p 3000:3000 --env-file .env.local -v "/Users/antoni-ostrowski/.ssh/known_hosts:$(SSH_KNOWN_HOSTS):ro" antost360/web-shell-client:latest

.PHONY: $(filter-out .PHONY, $(value .VARIABLES))
