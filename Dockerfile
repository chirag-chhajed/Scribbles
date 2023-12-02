FROM node:20-slim 

RUN npm install -g pnpm

COPY . /usr/src/

WORKDIR /usr/src/

# RUN --mount=type=cache,id=pnpm,target=/pnpm/store CI=true pnpm i --frozen-lockfile

RUN if [ -z "$arg" ]; then \
    CI=true pnpm i --frozen-lockfile; \
    else \
    --mount=type=cache,id=pnpm,target=/pnpm/store pnpm i --frozen-lockfile; \
    fi


RUN if [ -z "$arg" ]; then \
    pnpm run build; \
    else \
    echo "Argument is $arg"; \
    fi

EXPOSE 3000 4000

CMD [ "pnpm","start" ]