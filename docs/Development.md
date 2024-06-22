# Development-related information

## Developing

Once you've created a project and installed dependencies with `npm install`, start a development server:

```bash
npm run dev
```

Or start the server and open the app in a new browser tab:

```bash
npm run dev -- --open
```

## Building

To create a production version of the app:

```bash
npm run build
```

You can preview the production build with:

```bash
npm run preview
```

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Testing

### All

To run all tests of your app:

```bash
npm run test
```

### Unit tests only

```bash
npm run test:unit
```

### Integration tests only

```bash
npm run test:integration
```

## Other

### Svelte diagnostics checks

```bash
npm run check
```

### ESLint && Prettier

```bash
npm run lint
```

### Prettier updating files

```bash
npm run format
```
