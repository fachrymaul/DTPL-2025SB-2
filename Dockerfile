FROM node:20-slim AS node

FROM php:8.2-cli

# Copy Node.js and npm from the official Node image
COPY --from=node /usr/local/bin/node /usr/local/bin/node
COPY --from=node /usr/local/lib/node_modules /usr/local/lib/node_modules
RUN ln -s /usr/local/bin/node /usr/local/bin/nodejs \
    && ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm \
    && ln -s /usr/local/lib/node_modules/npm/bin/npx-cli.js /usr/local/bin/npx

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    unzip \
    libsqlite3-dev \
    libonig-dev \
    libxml2-dev \
    && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_sqlite mbstring xml bcmath pcntl

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Copy application files
COPY . .

# Install all dependencies
RUN composer install --ignore-platform-reqs \
    && npm install

# Create SQLite database file and setup environment
RUN mkdir -p database && touch database/database.sqlite \
    && cp .env.example .env \
    && php artisan key:generate \
    && php artisan migrate --force \
    && npm run build

EXPOSE 80

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=80"]
