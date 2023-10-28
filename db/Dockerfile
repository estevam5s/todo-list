FROM alpine

RUN apk update && apk add sqlite
RUN mkdir /data
VOLUME /data
WORKDIR /data

CMD ["sqlite3"]
