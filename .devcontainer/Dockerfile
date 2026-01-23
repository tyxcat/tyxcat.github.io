FROM mcr.microsoft.com/devcontainers/jekyll:latest

# Remove problematic yarn repository that has expired GPG keys
RUN rm -f /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get install -y --no-install-recommends \
    build-essential \
    imagemagick \
    inotify-tools \
    jupyter-nbconvert \
    procps \
    ruby-full \
    zlib1g-dev \
    && rm -rf /var/lib/apt/lists/*
