FROM node:20-alpine

# Install global dependencies
RUN npm install -g pnpm

# Set a build argument for environment
ARG NODE_ENV=production

# Set the working directory
WORKDIR /usr/src

# Copy package files
COPY package.json .
COPY pnpm-*.yaml .
COPY app/client/package.json app/client/package.json
COPY app/server/package.json app/server/package.json

# Install dependencies
RUN pnpm install

# Copy the rest of the application files
COPY . .

# Run build only if NODE_ENV is set to production
RUN if [ "$NODE_ENV" = "production" ]; then pnpm build; fi

# Expose ports
EXPOSE 3000 4000

# Start the application
CMD ["pnpm", "start"]
