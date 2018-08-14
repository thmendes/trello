<template>
    <div>
        <div class="row" v-show="idBoard != ''">
            <div class="col-md-12" >
                <h3 class="m-x-y-5">Reports</h3>
            </div>
        </div>
        
    </div>
</template>

<script>
    import axios from 'axios'
    import bus from './../../bus.js'

    export default {
        data() {
            return {
                idBoard: ""
            }
        },
        created: function(){
            this.listenToEvents();
        },
        methods: {
            listenToEvents(){
                bus.$on('refreshReports', (idBoard) => {
                    this.idBoard = idBoard;
                })
            }
        }
    }
</script>

<style scoped>
    .m-x-y-5{
        margin: 5px 5px 5px 5px;
    }
</style>