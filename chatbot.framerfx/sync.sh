#!/bin/bash

set -x

echo "Copying builds to dist..."
mkdir -p dist
cp index.html dist/index.html
cp -r build dist/
cp -r design dist/
cp -r images dist/

echo "Syncing with S3 bucket..."
aws s3 sync dist s3://chatbot-new-lychee

