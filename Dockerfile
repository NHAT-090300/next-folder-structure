FROM node:20-alpine

EXPOSE 4002

WORKDIR /home/app

COPY . .

RUN yarn install
RUN yarn build

RUN rm -rf ./src

CMD ["yarn", "start"]
