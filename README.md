# Docs

[![Netlify Status](https://api.netlify.com/api/v1/badges/a45b6fc3-6332-4835-a77c-63c8914ba1d0/deploy-status)](https://app.netlify.com/sites/stupendous-granita-0c49f0/deploys)

## Environment

```bash
# Create environment
conda env create -f environment.yml
# Activate environment
conda activate docs
# Deactivate environment
conda deactivate
```

## Mirror

```bash
yarn config set registry https://registry.npmmirror.com
```

## Development

```bash
make install
make dev
```

## Build

```bash
make build
```
