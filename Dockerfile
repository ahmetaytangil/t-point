# DEVELOPMENT
FROM node:18 as build

WORKDIR /app

COPY package.json package.json
RUN npm install @angular/cli@latest -g

COPY . .

ENV ANGULAR_STAGE $ANGULAR_STAGE
RUN echo $ANGULAR_STAGE

RUN npm i
RUN npm run build --configuration $ANGULAR_STAGE


# NGINX
FROM nginx:alpine

COPY --from=build /app/dist/paketle-web-dealer /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY deploy/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
