<template>
    <div id="app">
        <h1>Vue Environment Sticker Demo</h1>
        <div>
            <p>This is Vue.js component which shows a sticker displaying current environment name (e.g. 'demo', 'stg')</p>
            <p>See detail on <a href="https://github.com/doyaaaaaken/vue-environment-sticker">github</a>.</p>
        </div>
        <environment-sticker />
    </div>
</template>

<script>
    import EnvironmentSticker from '../src/components/EnvironmentSticker.vue'

    export default {
        name: 'App',
        components: {
            EnvironmentSticker
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
