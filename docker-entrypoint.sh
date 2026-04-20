#!/bin/sh
set -e

php artisan config:clear
php artisan config:cache
php artisan migrate --force
php artisan storage:link --force >/dev/null 2>&1 || true

exec "$@"
