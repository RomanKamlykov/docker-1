# docker-1

- https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker\

```sh
docker build -t docker-1 . && \
docker stop docker-1 || true && \
docker rm docker-1 || true && \
docker run -d --name=docker-1 -p 127.0.0.1:3000:3000 --env-file .env docker-1
```
