<template>
    <div id="app">
        <div class="container">
            <list-boards></list-boards>
            <reports></reports>
            <list-lists></list-lists>
            <list-labels></list-labels>
            <list-members></list-members>
        </div>
    </div>
</template>

<script>
    import ListBoards from './ListBoards.vue';
    import ListLabels from './ListLabels.vue';
    import ListLists from './ListLists.vue';
    import ListMembers from './ListMembers.vue';
    import Reports from './Reports/Reports.vue';

    export default {
        name: 'app',
        data(){
            return {}
        },
        components: { ListBoards, ListLabels, ListLists, ListMembers, Reports },
    }
</script>

<style>

</style>

