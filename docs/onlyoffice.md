# ONLYOFFICE

## Docker Compose

```bash
cat > docker-compose.yml <<EOF
# docs: https://helpcenter.onlyoffice.com/installation/docs-community-install-docker.aspx
# docs: https://hub.docker.com/r/onlyoffice/documentserver
version: '3'

services:
  onlyoffice:
    image: onlyoffice/documentserver
    env_file: .env
    ports:
      - '80:80'
    restart: unless-stopped
    volumes:
      - ./onlyoffice/logs:/var/log/onlyoffice
      - ./onlyoffice/data:/var/www/onlyoffice/Data
      - ./onlyoffice/lib:/var/lib/onlyoffice
      - ./onlyoffice/db:/var/lib/postgresql

EOF
```

```bash
cat > .env <<EOF
JWT_SECRET=""

EOF
```
