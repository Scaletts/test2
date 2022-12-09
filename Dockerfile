# syntax=docker/dockerfile:1
FROM node:18.12.1

WORKDIR /src/index

COPY ["package.json", "package-lock.json*", "./"]

COPY . .

CMD [ "npm", "start" ]
#  docker run -d -p 8888:3000 longchau/test2 : chạy docker
# docker tag 