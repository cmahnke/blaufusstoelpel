Blaufußtölpel
=============

# Setup for local (offine) development

Run the following script to generate assets

```
./scripts/setup.sh
```

# Converting Tiff files to WebP

Interestingly WebP yields better results for digitized material, when using a lossless compression, then JPEG2000.
Just set the following options:

```
convert 0001.tif -define webp:method=6  -define webp:lossless=true -quality 100  0001-im.webp
```
(It's very, very slow)


[WebP Options for ImageMagick](https://imagemagick.org/script/webp.php), [WebP Options for `cwebp`](https://developers.google.com/speed/webp/docs/cwebp)

# Starting hugo

```
/usr/local/bin/hugo server -D --debug --disableFastRender --renderToDisk
```
