#!/bin/bash
git branch -D gh-pages
git checkout -b gh-pages
nmp i
npm run build
npm run deploy
