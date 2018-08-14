<template>
    <div class="row" v-show="lists.length > 0">
        <div class="col-md-12 col-sm-12 col-xs-12">
            <h3 class="m-x-y-5">Lists</h3>
        </div>
        <div class="col-xl-3 col-md-12 col-sm-12 col-xs-12" v-for="list in lists" :key="list.id" v-show="list.name.length > 0">
            <div class="card border-dark mb-3" style="max-width: 18rem; max-width:100%" >
                <div class="card-header">{{ list.name }}</div>
                <div class="card-body text-dark list-button" v-if="list.status == 'default'" v-on:click="getListInfo(list.id)">
                    <h5 class="card-title">Carregar estatística</h5>
                </div>
                <div class="card-body text-dark" v-else>
                    <h5 class="card-title">{{ list.status }}</h5>
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
                lists: []
            }
        },
        created: function() {
            this.listenToEvents();
        },
        methods: {
            listenToEvents(){
                bus.$on('refreshLists', (boardLists) =>
                {
                    this.lists = boardLists;
                    this.setListsStatus();
                })
            },
            setListsStatus(status = 'default'){
                this.lists.map((obj) => {
                    obj.status = status;
                    return obj;
                });
            },
            getListInfo(listId)
            {
                let uri = 'http://localhost:4000/api/list/' + listId + '/cards';
                axios.get(uri).then((response) => {
                    this.listInformations = response.data;
                })
            }
        }        
    } 
</script>

<style scoped>
    .m-x-y-5 {
        margin: 5px 5px 5px 5px;
    }
    .list-button {
        background-color: lightblue;
        border-top: 1px solid;
        cursor: pointer;
    }
</style>

