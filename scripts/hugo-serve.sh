#!/bin/sh

ARGS=$@

PORT=1313
WWW_ROOT=./docs
BASEURL="http://localhost:$PORT"

/usr/local/bin/hugo -b $BASEURL --debug $ARGS

NAME=`basename $PWD`-hugo

# Using a name is to complicated --name $NAME
docker run  -p $PORT:80 -v `PWD`/$WWW_ROOT:/usr/share/nginx/html:ro -d --name $NAME --rm nginx

echo "Run this for a rebuild: /usr/local/bin/hugo -b $BASEURL --debug $ARGS"
