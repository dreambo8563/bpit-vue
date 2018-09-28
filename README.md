# bpit-vue

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

### import on demand

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
