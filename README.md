<h1 align="center">Welcome to vue-environment-sticker 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/vue-environment-sticker" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/vue-environment-sticker.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: Apache--2.0" src="https://img.shields.io/badge/License-Apache--2.0-yellow.svg" />
  </a>
</p>

> Vue.js component which shows a sticker displaying current environment name (e.g. 'demo', 'stg')

You can make it easier to understand which environments you are accessing (staging? demo? production?) and **reduce incidents.**

### ✨ Demo

[CodePen](https://codepen.io/doyaaaaaken/pen/NWxqyYz)

**ℹ️ Theare are only few themes available. I'll waiting your pull requests for the new COOL themes. See [HOW_TO_DEVELOP.md](HOW_TO_DEVELOP.md) if you're interested in it.**

# Usage

## with Yarn / npm

Install it.

```bash
yarn add vue-environment-sticker

# or if you use npm
# `npm install vue-environment-sticker`
```

Then, import and register the component.

```javascript
import Vue from "vue";
import EnvironmentSticker from "vue-environment-sticker";

Vue.component("environment-sticker", EnvironmentSticker);
```

That's all!! You can use `environment-sticker` component like below.
```sh
<body>
  <div class="content-wrapper>
   <!-- any html contents -->
  </div>
  <EnvironmentSticker
      label="STAGING"
      theme="SQUARE"
  />
</body>
``` 

These are available props. (**all props are optional.**)

| name | type | default value | description                         |
|------------|---------------|---------------|-------------------------------------|
| label | String | `DEMO` | label which shows environment name |
| position | String | `BOTTOM_RIGHT` | sticker position. <br/><br/>Available values: `BOTTOM_RIGHT` / `BOTTOM_LEFT` |
| theme | String | `SQUARE` | The appearance of the label. <br/><br/>Available values: `SQUARE`<br/><br/> **ℹ️ Theare are only few themes available. I'll waiting your pull requests for the new COOL themes. See [HOW_TO_DEVELOP.md](HOW_TO_DEVELOP.md) if you're interested in it.** |
| containerStyles | Object | `{}` | CSS styles for the container. This is bound as [inline style](https://vuejs.org/v2/guide/class-and-style.html#Binding-Inline-Styles). <br/><br/>e.g. `{padding: '4px'}` |
| labelStyles | Object | `{}` | CSS styles for the label. This is bound as [inline style](https://vuejs.org/v2/guide/class-and-style.html#Binding-Inline-Styles). <br/><br/>e.g. `{fontSize: '12px', color: 'blue'}` |


## via CDN (directly install in the browser)

you can install it directly in the browser through CDN.

```html
<!-- include VueJS first -->
<!--<script src="https://unpkg.com/vue@latest"></script>-->

<!-- use the latest vue-environment-sticker release -->
<script src="https://unpkg.com/vue-environment-sticker@latest"></script>

<!-- or point to a specific vue-environment-sticker release -->
<script src="https://unpkg.com/vue-environment-sticker@0.1.6"></script>
```

That's all!! You can use `environment-sticker` component.  
See detail on `with Yarn / npm Section`.

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
