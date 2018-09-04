# vue-paper-dashboard-nuxt

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).


### Sample DB work
```
npm install -g couchdb-dump
# load the sample mvp.json from this repository into your local `mvp` db
cdbload -d mvp < mvp.json
# dump the sample mvp DB from your local machine to json
cdbdump -d mvp > mvp.json
```
