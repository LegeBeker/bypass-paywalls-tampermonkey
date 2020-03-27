#!/bin/sh

JS_FILES="background.js common.js contentScript.js options.js version.js"
HTML_FILES="options.html popup.html"
DOC_FILES="LICENSE README.md"
IMG_FILES="bypass.png"
CH_FILES="manifest.json updates.xml"
FF_FILES="manifest-ff.json updates.json bypass-dark.png"

NAME="bypass-paywalls"

rm -f $NAME.crx $NAME.xpi

7z a -tzip -mx9 $NAME.crx $JS_FILES $HTML_FILES $DOC_FILES $IMG_FILES $CH_FILES
7z rn $NAME.crx manifest-ch.json manifest.json  # doesn't exist yet; fails harmlessly

7z a -tzip -mx9 $NAME.xpi $JS_FILES $HTML_FILES $DOC_FILES $IMG_FILES $FF_FILES
7z rn $NAME.xpi manifest-ff.json manifest.json
