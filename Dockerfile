FROM node:16-alpine as dependencies
WORKDIR /build
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:16-alpine as builder
WORKDIR /web
COPY . .
COPY --from=dependencies /build/node_modules ./node_modules
ENV NEXT_TELEMETRY_DISABLED 1
RUN yarn build

FROM node:16-alpine as runner
WORKDIR /web
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /web/next.config.js ./
COPY --from=builder /web/public ./public
COPY --from=builder /web/.next ./.next
COPY --from=builder /web/node_modules ./node_modules
COPY --from=builder /web/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
