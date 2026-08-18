FROM oven/bun:1-slim AS frontend
WORKDIR /app
RUN apt-get update \
    && apt-get install -y --no-install-recommends make git \
    && rm -rf /var/lib/apt/lists/*

COPY . ./
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY Makefile src.js public ./ 
RUN make build-client
FROM golang:1.25-alpine AS backend
WORKDIR /app
RUN apk add --no-cache git make
# Cache module downloads
COPY go.mod go.sum ./
RUN --mount=type=cache,target=/go/pkg/mod \
    go mod download
COPY . .
RUN --mount=type=cache,target=/go/pkg/mod \
    --mount=type=cache,target=/root/.cache/go-build \
    make build-backend

FROM alpine:3.21 AS runner
WORKDIR /app
RUN apk add --no-cache bash openssh-client
COPY --from=backend /app/program .
COPY --from=frontend /app/public ./public
EXPOSE 3000
CMD ["./program"]

