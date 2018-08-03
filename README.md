# Boilerplate for Chrome Extensions with Vue.js

## Setup

```bash
$ git clone https://github.com/krmax44/chrome-extension-vue-boilerplate
$ cd chrome-extension-vue-boilerplate

# using yarn
$ yarn install
$ yarn dev

# or npm
$ npm install
$ npm dev
```

Then drag-and-drop the `./dist/` folder to ``chrome-extensions://` and you should be up and running! `yarn build` will generate a `build.zip` ready for upload to the Chrome Web Store.

## This boilerplate includes...

 - a Promise-based wrapper for `chrome.storage`
 - automatic `manifest.json` versioning
 - development and production building
 - complete Webpack configs
 - Vue.js support

## Credits

Based on [the boilerplate of Anthony Gore](https://github.com/anthonygore/chrome-extension-webpack-boilerplate).