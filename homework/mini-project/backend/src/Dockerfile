FROM node:18

COPY ./package.json /myfolder/backend/src/
COPY ./yarn.lock /myfolder/backend/src/
WORKDIR /myfolder/backend/src/
RUN yarn install

COPY . /myfolder/backend/src/



CMD yarn start:dev