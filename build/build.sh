#!/bin/sh

JS_FILES="../src/js/common.js ../src/js/background.js ../src/js/sites.js ../src/js/contentScript.js ../src/js/options.js ../src/js/version.js"
DOC_FILES="../README.md"
IMG_FILES="../src/icons/bypass.png"

# Strip subdirectories for Chrome manifest
sed 's/src\/.*\///g' ../manifest.json > temp-chrome-manifest.json

# Strip subdirectories for Firefox manifest
sed 's/src\/.*\///g' ../manifest-ff.json > temp-ff-manifest.json

# Strip subdirectories for options html file
sed 's/\.\.\/js\///g' ../src/html/options.html > temp-options.html

# Strip subdirectories for popup html file
sed 's/\.\.\/js\///g' ../src/html/popup.html > temp-popup.html

HTML_FILES="temp-options.html temp-popup.html"
GEN_FILES="$JS_FILES $HTML_FILES $DOC_FILES $IMG_FILES"
CH_FILES="$GEN_FILES temp-chrome-manifest.json ../src/updates/updates.xml"
FF_FILES="$GEN_FILES temp-ff-manifest.json ../src/updates/updates.json ../src/icons/bypass-dark.png"

NAME="output/bypass-paywalls"

# Remove existing files
rm -f $NAME.crx $NAME.xpi

# Generate Chrome .crx extension package
7z a -tzip -mx9 $NAME.crx $CH_FILES
7z rn $NAME.crx temp-chrome-manifest.json manifest.json temp-options.html options.html temp-popup.html popup.html

# Generate Firefox .xpi extension package (Firefox manifest)
7z a -tzip -mx9 $NAME.xpi $FF_FILES
7z rn $NAME.xpi temp-ff-manifest.json manifest.json temp-options.html options.html temp-popup.html popup.html

# Remove temp files
echo "\nDeleting temp files..."
rm -v temp-chrome-manifest.json temp-ff-manifest.json temp-options.html temp-popup.html