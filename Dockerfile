# Base image
FROM node:22

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash

# Add Bun to PATH
ENV PATH="/root/.bun/bin:$PATH"

RUN apt-get update -y
RUN apt autoremove -y
RUN apt-get clean

WORKDIR /usr/src/app

COPY . .

RUN bun install
RUN bun run build

# Start the application using Bun
CMD [ "bun", "run", "start" ]