##########################
########## BASE ##########
##########################
FROM node:18-bullseye AS base

# install git
RUN apt-get install git openssh-client

#################################
########## DEVELOPMENT ##########
#################################
FROM base AS development

# node env
ENV NODE_ENV development

# working directory
WORKDIR /app
COPY . /app

# global dependencies
RUN npm i -g pnpm vite

# startup
COPY .devcontainer/startup.sh /
RUN chmod +x /startup.sh

CMD ["/bin/bash"]