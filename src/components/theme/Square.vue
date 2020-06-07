<template>
    <div class="v-environment-sticker__square">
        <p class="v-environment-sticker__label">{{ label }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
    .v-environment-sticker__square {
        background: red;
        width: 100%;
        height: 100%;
        padding: 4px;
    }

    .v-environment-sticker__label {
        font-weight: bold;
        word-break: break-all;
        font-size: 16px;
        color: #0e1922;
    }
</style>
