<template>
    <div class="v-environment-sticker"
        :class="{
            'v-environment-sticker__bottomRight': position === 'BOTTOM_RIGHT',
            'v-environment-sticker__bottomLeft': position === 'BOTTOM_LEFT'
        }"
    >
        <square-theme
                v-if="theme === 'SQUARE'"
                :label="label"
                :container-styles="containerStyles"
                :label-styles="labelStyles"
        />
    </div>
</template>

<script>
    import Square from './theme/Square.vue';

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
            },
            //Available theme: SQUARE
            theme: {
                type: String,
                default: "SQUARE"
            },
            //CSS styles for container
            containerStyles: {
                type: Object
            },
            //CSS styles for label
            labelStyles: {
                type: Object
            }
        },
        components: {
            'square-theme': Square
        }
    }
</script>

<style scoped>
    .v-environment-sticker {
        width: 70px;
        height: 70px;
        position: fixed;
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
</style>
