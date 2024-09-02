# watchtower

## Docker Compose

```bash
cat > docker-compose.yml <<EOF
# docs: https://hub.docker.com/r/containrrr/watchtower
# docs: https://containrrr.dev/watchtower/
# source code: https://github.com/containrrr/watchtower
version: '3'

services:
  watchtower:
    image: containrrr/watchtower
    restart: unless-stopped
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock

EOF
```
