<template>
    <div class="v-environment-sticker">
        <p class="v-environment-sticker__inner">{{ label }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                default: "DEMO"
            },
        }
    }
</script>

<style scoped>
    .v-environment-sticker {
        right: 0;
        bottom: 0;
        width: 70px;
        height: 70px;
        position: fixed;
        background: red;
        display: flex;
    }

    .v-environment-sticker__inner {
        margin: auto;
        font-weight: bold;
    }
</style>
