<template>
    <div id="app">
        <div class="container">
            <list-boards></list-boards>
            <list-labels></list-labels>
        </div>
    </div>
</template>

<script>
    import ListBoards from './ListBoards.vue';
    import ListLabels from './ListLabels.vue';

    export default {
        name: 'app',
        data(){
            return {}
        },
        components: { ListBoards, ListLabels },
    }
</script>

<style>

</style>

