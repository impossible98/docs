# cloudflared

## Docker Compose

```bash
cat > docker-compose.yml <<EOF
# docs: https://hub.docker.com/r/cloudflare/cloudflared
# source code: https://github.com/cloudflare/cloudflared
version: '3'

services:
  cloudflared:
    image: cloudflare/cloudflared
    env_file: .env
    restart: unless-stopped
    command: tunnel --no-autoupdate run --token \${TOKEN}

EOF
```

```bash
cat > .env <<EOF
TOKEN=""

EOF
```
