#!/bin/sh

WD=`pwd`

# IIFF
for IMAGE in `ls -1 content/post/**/page*.jpg content/post/**/front.jpg`
do
    iiif_static.py -d `dirname $IMAGE` $IMAGE
#    cd `dirname $IMAGE`
#    cd $WD
done

cd $WD

# Favicons
# See https://gist.github.com/pfig/1808188
convert static/images/blaufusstoelpel.svg static/images/blaufusstoelpel.png
convert static/images/blaufusstoelpel.png -resize 128x128 -transparent white static/images/favicon-128.png
convert static/images/favicon-128.png -resize 16x16 static/images/favicon-16.png
convert static/images/favicon-128.png -resize 32x32 static/images/favicon-32.png
convert static/images/favicon-128.png -resize 64x64 static/images/favicon-64.png
convert static/images/favicon-16.png static/images/favicon-32.png static/images/favicon-64.png static/images/favicon-128.png -colors 256 static/images/favicon.ico
