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

## Usage

Install it by below command.

```bash
yarn add vue-environment-sticker

# or if you use npm
# `npm install vue-environment-sticker`
```

And then, import and register the component.

```javascript
import Vue from "vue";
import EnvironmentSticker from "vue-environment-sticker";

Vue.component("environment-sticker", EnvironmentSticker);
```

And simply, use that vue component like below code.
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
