FROM ruby:2.6.2-alpine

ENV APP_DIR /portfolio

WORKDIR $APP_DIR

COPY . /portfolio

RUN apk update && \
    apk add --no-cache postgresql-dev postgresql tzdata libxml2-dev curl-dev make gcc libc-dev g++ && \
    cd $APP_DIR && \
    bundle install
