# DEVELOPMENT
FROM node:18 as build

WORKDIR /app

COPY package.json package.json
RUN npm install @angular/cli@latest -g

COPY . .


RUN npm i
RUN npm run build


# NGINX
FROM nginx:alpine

COPY --from=build /app/dist/t_point /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY deploy/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
