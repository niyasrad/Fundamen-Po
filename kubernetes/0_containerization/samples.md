### Sample DockerFile for a NodeJS application
```DockerFile
FROM node:20.9.0-alpine3.18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]
```

### Sample DockerFile for an NGINX React application
```DockerFile
FROM node:20.9.0-alpine3.18 as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Dockerignore
The `.dockerignore` file is used to specify files and directories that should not be copied to the container when building the Docker Image. The following is an example of a `.dockerignore` file that specifies that the `node_modules` directory should not be copied to the container when building the Docker Image
```
node_modules
.DS_Store
```
