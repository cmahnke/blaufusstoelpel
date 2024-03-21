#!/bin/sh

echo "Pass a single argument 'local' to set up IIIF URLs to http://localhost:1313/"

if [ "$1" == "local" ] ; then
  export URL_PREFIX=http://localhost:1313
  unset SKIP_IIIF
fi

# IIIF tiles
echo "Set SKIP_IIIF to something to disable generation of IIIF derivates"

if [ -z "$SKIP_IIIF" ] ; then
    ./scripts/iiif.sh
fi

#NPM dependencies
echo "Calling theme scripts"
for SCRIPT in $PWD/themes/projektemacher-base/scripts/init/*.sh ; do
    echo "Running $SCRIPT"
    bash "$SCRIPT"
    ERR=$?
    if [ $ERR -ne 0 ] ; then
        echo "Execution of '$SCRIPT' failed!"
        exit $ERR
    fi
done

SED=sed
OS="`uname`"
case "$OS" in
  'Darwin')
    SED=gsed
    ;;
  'Linux')
    SED=sed
    ;;
esac
echo "OS is '$OS', sed is '$SED'"

$SED -i -E 's/@import url\("https:\/\/fonts\.googleapis\.com.*//g' themes/parsa/assets/css/style.css
#find node_modules/vis-timeline/standalone/ -type f -name '*.js' -exec $SED -i -E 's/\/\*\s*@__PURE__\s*\*\///g' '{}' \;
#find node_modules/vis-timeline/standalone/ -type f -name '*.js' -exec $SED -i -E 's/_classCallCheck/classCallCheck/g' '{}' \;
#find node_modules/vis-timeline/standalone/ -type f -name '*.js' -exec $SED -i -E 's/_classCallCheck.*//g' \;

yarn run svgo

sed -E 's/<svg ([^>]*)>/<svg \1 style="background-color:white">/g' static/images/blaufusstoelpel.svg > static/images/blaufusstoelpel-white.svg

# Generate Previews
./themes/projektemacher-base/scripts/preview.sh

# Favicons
# See https://gist.github.com/pfig/1808188
convert static/images/blaufusstoelpel.svg static/images/blaufusstoelpel.png

SOURCE="static/images/blaufusstoelpel.png" OPTIONS="-resize 128x128 -transparent white" ./themes/projektemacher-base/scripts/favicon.sh
