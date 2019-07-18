#!/bin/bash

if [ "$TRAVIS_BRANCH" == "master" ]; then
  cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js
  yarn run build
  yarn run travis-deploy-once "yarn run semantic-release"
  curl -Is https://purge.jsdelivr.net/npm/dinero.js/build/umd/dinero.min.js
fi
