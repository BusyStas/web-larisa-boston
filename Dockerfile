FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html style.css script.js /usr/share/nginx/html/
COPY images/ /usr/share/nginx/html/images/

EXPOSE 8080
