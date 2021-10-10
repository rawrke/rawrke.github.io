#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# add everything in the dist folder for a release
git add dist -f
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git subtree push --prefix dist origin release

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages