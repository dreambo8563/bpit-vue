# bpit-vue

### import on demand

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
      <FABItem @click="test" href="#" style="background-color:red" tooltip="Google+">A</FABItem>
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
