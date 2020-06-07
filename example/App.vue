<template>
    <div id="app">
        <h1>This is EnvironmentSticker example page.</h1>
        <EnvironmentSticker
            label="DEMO"
            position="BOTTOM_RIGHT"
            theme="SQUARE"
        />
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
