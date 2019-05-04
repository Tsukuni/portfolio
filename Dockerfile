FROM node:11.15-alpine

ENV APP_DIR /portfolio

WORKDIR $APP_DIR

COPY . $APP_DIR

RUN apk add --update --no-cache

EXPOSE 3000
