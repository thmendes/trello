<template>
    <div id="app">
        <div class="row col-md-12">
            <list-boards></list-boards>
        </div>
    </div>
</template>

<script>
    import ListBoards from './ListBoards.vue';
    export default {
        name: 'app',
        data(){
            return {}
        },
        components: { ListBoards },
    }
</script>

<style>

</style>

