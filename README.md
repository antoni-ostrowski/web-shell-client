# Web ssh 

Self-hosted web app & ssh proxy I build purely to have usable mobile ssh client on IpadOS. The point of this project is so I can make use of modifier keys that are literally un-mappable on IpadOS and in every ssh client app except for Blink Shell (I think), but it paid and i dont care about 99% of its features.

> Warning! i dont plan to secure this app in any way, because I rely on Cloudflare Tunnel and Zero Trust policies to enforce access control


# Hosting

## Configuration format (`config.json`):

```json
{
	"servers": [
		{
			"name": "custom name",
			"user": "ssh server user",
			"pass": "ssh server pass",
			"host": "ssh hostname"
		}
	]
}
```

## docker-compose.yml

```yaml
services:
  web-ssh:
    image: antost360/web-ssh:latest
    ports:
      - "3000:3000"
    volumes:
      - ./dev/config.json:/app/config/config.json:ro
      - /Users/antoni-ostrowski/.ssh/known_hosts:/app/known_hosts:ro
    restart: unless-stopped
```

Then:

```sh
docker compose up -d
```

Open http://localhost:3000 — the index page lists the servers from `config.json`.

## Notes

- these are the environment variables you can overwrite and their default values you should map volumes to:
    - `CONFIG_PATH` -> `/app/config/config.json`
    - `SSH_KNOWN_HOSTS` -> `/app/config/known_hosts`
- Known hosts must contain the ed25519 fingerprints of every target server (`HostKeyAlgorithms` is pinned to `ssh-ed25519`).
- There is no auth on the app itself — protect it with Cloudflare Tunnel + Zero Trust or another reverse proxy.

> overwriting with envs is useful for development when I run the program localy


# Todos
- [ ] qmk inspired remap control
- [ ] modifying config from client



