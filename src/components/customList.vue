<template>
    <div class="elem">
        {{label}}
    </div>
</template>

<script>
    export default {
        name: 'customList',
        props: {
            label: String
        }
    }
</script>

<style lang="scss" scoped>
    .elem {
        padding: 20px;
        margin-top: 10px;
        border: 1px solid #808080;
        border-radius: 5px;
    }
</style>