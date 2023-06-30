FROM node:20.2.0-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install 

COPY prisma/schema.prisma ./prisma/
RUN npx prisma generate


COPY . . 

EXPOSE 8080

CMD ["yarn", "start"]

