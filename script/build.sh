#!/bin/bash

build() {
    echo '###Building React###'

    rm -rf dist/*

    export INLINE_RUNTIME_CHUNK=false
    export GENERATE_SOURCEMAP=false
    export GOOGLE_APPLICATION_CREDENTIALS="/home/mehmet/Dropbox/my-works/selection-translator/selection-translator-0c6c01edc4c5.json"

    react-scripts build

    mkdir -p dist
    cp -r build/* dist

    mv dist/index.html dist/popup.html
    cp -r src/background dist/background
}

build