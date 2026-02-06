#!/bin/bash
set -euo pipefail

MSG="${1:-deploy $(date '+%Y-%m-%d %H:%M:%S')}"
DIR="/root/nanobandit-site"
DEST="/var/www/nanobandit/html"

cd "$DIR"

echo "==> Building..."
npx @11ty/eleventy --quiet

echo "==> Deploying..."
rsync -av --delete dist/ "$DEST/"
rsync -av src/assets/ "$DEST/assets/"

echo "==> Committing..."
git add -A
git commit -m "$MSG" || echo "Nothing to commit"
git push

echo "==> Done."
