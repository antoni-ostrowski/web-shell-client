# Web Shell Client

Self-hosted web app I build purely to have usable mobile ssh client on IpadOS. The point of this project is so I can make use of modifier keys that are literally un-mappable on IpadOS and in every ssh client app except for Blink Shell (I think), but it paid and i dont care about 99% of its features.
This simple tool allows me to simply access the shell of the host that the server is running on, and from there I can do stuff on that host or ssh into my main mac mini and do dev work. Frontend is literary just sending inputs to server which pipes them to PTY, and pipes its output back to the client, all via websockets.

> Warning! i dont plan to secure this app in any way, because I rely on Cloudflare Tunnel and Zero Trust policies to enforce access control

## Docker Compose

Build and run the app with Docker Compose:

```yaml
services:
  web-shell-client:
    image: antost360/web-shell-client:latest
    build: .
    ports:
      - "3000:3000"
    environment:
      SHELL_TYPE: docker
      SERVER_USER: your-host-username
    extra_hosts:
      - "host.docker.internal:host-gateway"
```

Start it with:

```bash
docker compose up -d --build
```

Open `http://localhost:3000`. The container connects to the Docker host over SSH at `host.docker.internal`. Enable SSH access for `SERVER_USER` on the host and configure SSH keys or enter the password when the container connects.


# Todos
- [x] docker setup
- [ ] config file
- [ ] qmk inspired remap control
- [ ] frontend styles



