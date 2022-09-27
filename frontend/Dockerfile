FROM node:alpine
WORKDIR /usr/src/app
COPY ./package* /usr/src/app/
RUN npm install
COPY ./ /usr/src/app/
RUN npm run build

FROM nginx:table-alpine as production-stage
COPY ./nginx/conf.d/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/build /usr/share/nginx/html
CMD ["nginx","-g","daemon off;"]
