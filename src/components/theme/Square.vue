<template>
    <div class="v-environment-sticker__square">
        <p class="v-environment-sticker__inner">{{ label }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                default: "DEMO"
            }
        }
    }
</script>

<style scoped>
    .v-environment-sticker__square {
        background: red;
        width: 100%;
        height: 100%;
    }

    .v-environment-sticker__inner {
        margin: auto;
        font-weight: bold;
    }
</style>
