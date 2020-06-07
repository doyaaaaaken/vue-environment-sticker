<template>
    <div
        :style="containerStyles"
        class="v-environment-sticker__square">
        <p
            :style="labelStyles"
            class="v-environment-sticker__label"
        >
            {{ label }}
        </p>
    </div>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                required: true
            },
            containerStyles: {
                type: Object
            },
            labelStyles: {
                type: Object
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
