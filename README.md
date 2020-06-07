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

### ✨ Demo

[CodePen](https://codepen.io/doyaaaaaken/pen/NWxqyYz)

## Install

Install it via package manager (`yarn` or `npm`).

```bash
yarn add vue-environment-sticker

# or if you use npm
# `npm install vue-environment-sticker`
```

Or you can install it directly in the browser through CDN.

```html
<!-- include VueJS first -->
<!--<script src="https://unpkg.com/vue@latest"></script>-->

<!-- use the latest vue-environment-sticker release -->
<script src="https://unpkg.com/vue-environment-sticker@latest"></script>

<!-- or point to a specific vue-select release -->
<script src="https://unpkg.com/vue-select@0.1.3"></script>
```


# Usage

Import and register the component.

```javascript
import Vue from "vue";
import EnvironmentSticker from "vue-environment-sticker";

Vue.component("environment-sticker", EnvironmentSticker);
```

And then, use that vue component like below code.
```sh
<body>
  <div class="content-wrapper>
   <!-- any html contents -->
  </div>
  <environment-sticker>
  </environment-sticker>
</body>
```

That's all!! 


## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
