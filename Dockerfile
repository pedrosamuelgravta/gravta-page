# syntax=docker.io/docker/dockerfile:1.7-labs
FROM node:20.19.0 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY --exclude=nginx.conf . .
RUN npm run build

FROM nginx:latest AS runner

COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
