FROM oven/bun:1 AS base

WORKDIR /app

# Install dependencies only when needed
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build the project
RUN bun run build

# Production image, copy all the files and run next
FROM oven/bun:1 AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=base /app/public ./public
COPY --from=base /app/.next/static ./.next/static
COPY --from=base /app/.next/standalone ./

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["bun", "server.js"]
