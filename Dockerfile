FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm deploy --filter=client  /prod/client
RUN pnpm deploy --filter=server  /prod/server

FROM base AS client
COPY --from=build /prod/client /prod/client
WORKDIR /prod/client
RUN pnpm build
EXPOSE 3000
CMD [ "pnpm", "start" ]

FROM base AS server
COPY --from=build /prod/server /prod/server
WORKDIR /prod/server
RUN pnpm build
EXPOSE 4000
CMD [ "pnpm", "start" ]