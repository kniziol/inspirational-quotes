FROM ghcr.io/pnpm/pnpm:12 AS base
RUN pnpm runtime set node 26 -g
COPY . /app
WORKDIR /app

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

FROM base
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/.svelte-kit /app/.svelte-kit
CMD [ "pnpm", "dev" ]
