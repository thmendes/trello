<template>
    <div>
        <h3>Boards</h3>
        <div class="col-md-12" v-show="boards.length > 0">
            <div class="row mrb-10" v-for="board in boards" :key="board.id">
                <div class="input-group m-b-5">
                    {{ board.name }}
                </div>
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
            }
        }
    }
</script>

<style scoped>
    .todo__done {
        text-decoration: line-through !important
    }
    .no_border_left_right {
        border-left: 0px;
        border-right: 0px;
    }
    .flat_form {
        border-radius: 0px;
    }
    .mrb-10 {
        margin-bottom: 10px;
    }
    .addon-left {
        background-color: none !important;
        border-left: 0px !important;
        cursor: pointer !important;
    }
    .addon-right {
        background-color: none !important;
        border-right: 0px !important;
    }
</style>