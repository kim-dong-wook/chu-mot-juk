FROM node:alpine

# 작업 폴더를 만들고 npm 설치
WORKDIR /usr/src/app
COPY ./package* /usr/src/app/
RUN npm install

# 소스를 작업폴더로 복사하고 빌드
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY ./nignx/nginx.conf /etc/nginx/conf.d/default.conf

COPY ./pem /etc/letsencrypt
# FROM nginx:latest
# nginx의 기본 설정을 삭제하고 앱에서 설정한 파일을 복사
# RUN rm -rf /etc/nginx/conf.d
# COPY conf /etc/nginx

# 위에서 생성한 앱의 빌드산출물을 nginx의 샘플 앱이 사용하던 폴더로 이동
#COPY /var/jenkins_home/workspace/frontend/frontend/build /usr/share/nginx/html
COPY ./build /usr/share/nginx/html

CMD ["ls"]
CMD ["cd","build"]
CMD ["ls"]

# 80포트 오픈하고 nginx 실행
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
