FROM node:12.20.0-alpine3.10

COPY ./entrypoint.sh /run

RUN mkdir /run/web-g6

EXPOSE 8080

CMD [ "/bin/sh", "/run/entrypoint.sh" ]