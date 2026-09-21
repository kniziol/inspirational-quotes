# Inspirational Quotes

Development-related information

## Requirements

1. [Git](https://git-scm.com)
2. [Docker](https://www.docker.com)
3. Your favourite IDE :)

## Getting started

1. Build, create and start Docker's containers by running command:

   ```bash
   docker compose up --detach
   ```

2. Open the app in your browser: http://localhost:5173

## Tips

### Productivity tip

> [!TIP]
> Using an alias for the `docker compose {command}` command can be more
> efficient because it requires less typing.

#### Create aliases

```shell
alias dce='docker compose exec'
alias dcl='docker compose logs -f'
alias dcr='docker compose run --rm'
alias dcp='docker compose ps --all'
alias dcu='docker compose up -d'
```

#### See the comparison

An example of running a Bash command:

| Before                         | After          |
| ------------------------------ | -------------- |
| `docker compose exec app bash` | `dce app bash` |

### The `ni` tool

> [!TIP]
> Instead of installing manually `pnpm`, you can run the `ni` tool, a universal
> Node package manager. It supports all the modern and popular package managers.

Comparison of `pnpm` and `ni` commands:

| pnpm           | ni          |
| -------------- | ----------- |
| `pnpm install` | `ni`        |
| `pnpm dev`     | `nr dev`    |
| `pnpm lint`    | `nr lint`   |
| `pnpm format`  | `nr format` |

See more:

- https://www.npmjs.com/package/@antfu/ni
- https://github.com/antfu-collective/ni

## Building

To create a production version of the app:

```bash
docker compose exec app nr build
```

You can preview the production build with:

```bash
docker compose exec app nr preview
```

> To deploy your app, you may need to install
> an [adapter](https://kit.svelte.dev/docs/adapters) for your target
> environment.

## Testing

### All

To run all tests of your app:

```bash
docker compose exec app nr test
```

### Unit tests only

```bash
docker compose exec app nr test:unit
```

### Integration tests only

```bash
docker compose exec app nr test:integration
```

## Other

### Svelte diagnostics checks

```bash
docker compose exec app nr check
```

### ESLint && Prettier

```bash
docker compose exec app nr lint
```

### Prettier updating files

```bash
docker compose exec app nr format
```
