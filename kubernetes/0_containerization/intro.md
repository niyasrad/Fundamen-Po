## Understanding Dockerization

To package our applications into containers, we'll use a lot of Docker.

### .DockerFile

DockerFile extensions serve one purpose. To build to a Docker Image. A particular Docker file can be built with the following command

```bash
docker build -t <image-name> <path-to-dockerfile>
```

### Inside a DockerFile

A DockerFile is a set of instructions that are executed in order to build a Docker Image. The following are the most common instructions used in a DockerFile

#### FROM

For conveying a base image to build upon. The following is an example of a DockerFile that uses the `ubuntu` base image

```DockerFile
FROM ubuntu
```

#### WORKDIR

For conveying the working directory inside the container. The following is an example of a DockerFile that uses the `WORKDIR` instruction to set the working directory inside the container to `/var/www/html`

```DockerFile
FROM ubuntu
WORKDIR /var/www/html
```

#### RUN

For executing commands inside the container. The following is an example of a DockerFile that uses the `RUN` instruction to install `curl` inside the container

```DockerFile
FROM ubuntu
RUN apt-get update && apt-get install -y curl
```

#### CMD

For executing commands when the container is run. The following is an example of a DockerFile that uses the `CMD` instruction to run `curl` when the container is run

```DockerFile
FROM ubuntu
RUN apt-get update && apt-get install -y curl
CMD curl -s http://www.google.com
```

#### Difference between RUN and CMD

The `RUN` instruction is executed when the Docker Image is built. The `CMD` instruction is executed when the Docker Image is run.

#### COPY

For copying files from the host machine to the container. The following is an example of a DockerFile that uses the `COPY` instruction to copy a file from the host machine to the container

```DockerFile
FROM ubuntu
COPY ./index.html /var/www/html/index.html
```

#### EXPOSE

For exposing a port from the container to the host machine. The following is an example of a DockerFile that uses the `EXPOSE` instruction to expose port `80` from the container to the host machine

```DockerFile
FROM ubuntu
EXPOSE 80
```

#### Others

You can read the full list of instructions [here](https://docs.docker.com/engine/reference/builder/)