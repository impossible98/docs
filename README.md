# Docs

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
