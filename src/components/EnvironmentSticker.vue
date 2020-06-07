<template>
    <div
        :class="{
            'v-environment-sticker__bottomRight': position === 'BOTTOM_RIGHT',
            'v-environment-sticker__bottomLeft': position === 'BOTTOM_LEFT'
        }"
        class="v-environment-sticker"
    >
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
            //BOTTOM_RIGHT / BOTTOM_LEFT
            position: {
                type: String,
                default: "BOTTOM_RIGHT"
            }
        }
    }
</script>

<style scoped>
    .v-environment-sticker {
        width: 70px;
        height: 70px;
        position: fixed;
        background: red;
        display: flex;
    }

    .v-environment-sticker__bottomRight {
        bottom: 0;
        right: 0;
    }

    .v-environment-sticker__bottomLeft {
        bottom: 0;
        left: 0;
    }

    .v-environment-sticker__inner {
        margin: auto;
        font-weight: bold;
    }
</style>
