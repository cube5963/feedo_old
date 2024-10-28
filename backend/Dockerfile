FROM node:20.18

WORKDIR /app

COPY package*.json /

RUN npm install

COPY . .

EXPOSE 5000

COPY prisma ./prisma
RUN npx prisma generate

CMD ["npm", "run" ,"start"]