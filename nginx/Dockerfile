FROM nginx:stable-alpine

COPY ./default.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80


# Configura Nginx para escuchar en el puerto 80
RUN sed -i 's/listen 8080/listen 80/g' /etc/nginx/conf.d/default.conf

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
