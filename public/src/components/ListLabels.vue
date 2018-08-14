<template>
    <div class="row" v-show="labels.length > 0">
        <div class="col-md-12">
            <h3 class="m-x-y-5">Labels</h3>
            <button type="button" class="btn btn-secondary left m-x-y-5 no-border" v-bind:style="{ backgroundColor: label.color }"  v-for="label in labels" :key="label.id" v-show="label.name.length > 0">
                {{ label.name }} <span class="badge badge-light"></span>
                <span class="sr-only">Labels</span>
            </button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import bus from './../bus.js'

    export default {
        data() {
            return {
                labels: []
            }
        },
        created: function () {
            this.listenToEvents();
        },
        methods: {
            listenToEvents(){
                bus.$on('refreshLabels', (boardLabels) => {
                    this.labels = boardLabels;
                })
            }
        }
    }
</script>

<style scoped>
    .m-x-y-5{
        margin: 5px 5px 5px 5px;
    }
    .no-border{
        border: none;
    }
</style>
