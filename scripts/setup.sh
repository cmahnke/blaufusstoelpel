#!/bin/sh

# IIIF tiles
echo "Set SKIP_IIIF to something to disable generation of IIIF derivates"

if [ -z "$SKIP_IIIF" ] ; then
    ./scripts/iiif.sh
fi

rm -f 'themes/projektemacher-base/patches/mirador+3.0.0.patch'

echo "Calling theme scripts"
for SCRIPT in $PWD/themes/projektemacher-base/scripts/init/*.sh ; do
    echo "Running $SCRIPT"
    bash "$SCRIPT"
done

yarn run svgo

sed -E 's/<svg ([^>]*)>/<svg \1 style="background-color:white">/g' static/images/blaufusstoelpel.svg > static/images/blaufusstoelpel-white.svg

# Favicons
# See https://gist.github.com/pfig/1808188
convert static/images/blaufusstoelpel.svg static/images/blaufusstoelpel.png

SOURCE="static/images/blaufusstoelpel.png" OPTIONS="-resize 128x128 -transparent white" ./themes/projektemacher-base/scripts/favicon.sh
