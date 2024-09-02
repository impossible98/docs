# Plex Media Server

## Docker Compose

```bash
cat > docker-compose.yml <<EOF
# docs: https://hub.docker.com/r/plexinc/pms-docker
version: '3'

services:
  plex:
    image: plexinc/pms-docker
    devices:
      - "/dev/dri:/dev/dri"
    env_file: .env
    network_mode: host
    restart: unless-stopped
    volumes:
      - ./plex/config:/config
      - ./plex/transcode:/transcode
      - <path/to/media>:/data:ro

EOF
```

```bash
cat > .env <<EOF
TZ=""
PLEX_CLAIM="" # https://www.plex.tv/claim

EOF
```
