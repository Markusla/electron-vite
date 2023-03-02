# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

-   [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## create exe

```bash
docker run --rm -ti \
 --env-file <(env | grep -iE 'DEBUG|NODE*|ELECTRON*|YARN*|NPM*|CI|CIRCLE|TRAVIS*TAG|TRAVIS|TRAVIS_REPO*|TRAVIS*BUILD*|TRAVIS*BRANCH|TRAVIS_PULL_REQUEST*|APPVEYOR*|CSC*|GH*|GITHUB*|BT*|AWS*|STRIP|BUILD\_') \
 --env ELECTRON_CACHE="/root/.cache/electron" \
 --env ELECTRON_BUILDER_CACHE="/root/.cache/electron-builder" \
 -v ${PWD}:/project \
 -v ${PWD##\*/}-node-modules:/project/node_modules \
 -v ~/.cache/electron:/root/.cache/electron \
 -v ~/.cache/electron-builder:/root/.cache/electron-builder \
 electronuserland/builder:wine
```

```bash
npm i && npm run build && npm run dist -- --win portable
```
