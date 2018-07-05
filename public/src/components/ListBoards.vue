<template>
    <div>
        <div class="row">
            <div class="col-md-12" v-show="boards.length > 0">
                <h3 class="m-x-y-5">Boards</h3>
                <button type="button" class="btn btn-primary left m-x-y-5" v-for="board in boards" :key="board.id" v-on:click="getBoardInfos(board.id)">
                    {{ board.name }} <span class="badge badge-light"></span>
                    <span class="sr-only">Board</span>
                </button>
            </div>
        </div>
        
    </div>
</template>

<script>
    import axios from 'axios'
    import bus from './../bus.js'

    export default {
        data() {
            return {
                boards: []
            }
        },
        created: function(){
            this.fetchBoard();
        },
        methods: {
            fetchBoard(){
                let uri = 'http://localhost:4000/api/boards';
                axios.get(uri).then((response) => {
                    this.boards = response.data;
                })
            },
            getBoardInfos(id)
            {
                this.refreshLabels(id);
            },
            refreshLabels(boardId){
                bus.$emit("refreshLabels", boardId);
            }
        }
    }
</script>

<style scoped>
    .m-x-y-5{
        margin: 5px 5px 5px 5px;
    }
</style>