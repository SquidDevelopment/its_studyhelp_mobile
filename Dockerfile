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

# Install dependencies using Bun
RUN bun install
COPY . .

RUN ls -la ./src-webviews

# Run dependency installation and build using Bun
RUN bun run dependencies
RUN bun run build

# Start the application using Bun
CMD [ "bun", "run", "start" ]