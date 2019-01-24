# bpit-vue

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ac3d1624c93b435cbfe519aeb0511617)](https://app.codacy.com/app/dreambo8563/bpit-vue?utm_source=github.com&utm_medium=referral&utm_content=dreambo8563/bpit-vue&utm_campaign=Badge_Grade_Dashboard) [![Greenkeeper badge](https://badges.greenkeeper.io/dreambo8563/bpit-vue.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.com/dreambo8563/bpit-vue.svg?branch=master)](https://travis-ci.com/dreambo8563/bpit-vue)
[![Known Vulnerabilities](https://snyk.io/test/github/dreambo8563/bpit-vue/badge.svg?targetFile=package.json)](https://snyk.io/test/github/dreambo8563/bpit-vue?targetFile=package.json)

![](https://raw.githubusercontent.com/dreambo8563/static-assets/master/bpit/100*100.png)

## Intro

### What is bpit/vue?

bpit/vue is not a component UI kit, we didn't have the consistent theme for these components, it's just a collection of effects components.

bpit/vue is a good place for beginners to learn How to create their UI Kits. Now, it's just a showcase of the effects I can gather from the Internet (codepen, github...) and transfered to vue `things`

### What we focus?

We focus on the effects of these components other than functionailties. That's why it's not a ui kit.

We take more time on css part and hope to make it more general and easy to use, so we encapsulate them into vue component/directives.

### Why we need it?

There are so many resources on the Internet, we can make use of them to save time and to be more efficient. bpit/vue collects them, encapsulates them, imporves them.

Install easy && Import on demand && Everything in one place

## import on demand

> npm install babel-plugin-import --save-dev

babel.config.js

```js
plugins: [
  [
    "import",
    {
      libraryName: "@bpit/vue",
      camel2DashComponentName: false,
      customName: name => {
        return `@bpit/vue/src/components/${name}`
      }
    }
  ]
]
```

#### import components

```js
import { FlockBanner, FAB, FlockButton } from "@bpit/vue"

const FABItem = FAB.FABItem
const FABTrigger = FAB.FABTrigger
const FABContainer = FAB.FABContainer
```

### sample

```html
<FlockBanner>This is a banner!</FlockBanner>
<FlockButton>Submit</FlockButton>
<FABContainer :expand="expand">
  <FABItem @click="test" href="#" style="background-color:red" tooltip="Google+"
    >A</FABItem
  >
  <FABItem href="#" tooltip="Google+">B</FABItem>
  <FABItem href="#" tooltip="Google+">C</FABItem>
  <FABItem href="#" tooltip="Google+">D</FABItem>
  <FABTrigger @click="test" class="trigger" tooltip="share"></FABTrigger>
</FABContainer>
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```
