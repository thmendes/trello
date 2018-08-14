<template>
    <div class="row">
        <div class="col-md-12">
            <h3 class="m-x-y-5">Cards Per Members</h3>
            <button type="button" class="btn btn-secondary left m-x-y-5" v-for="member in members" :key="member.id" v-show="member.fullName.length > 0">
                {{ member.fullName }} <span class="badge badge-light"></span>
                <span class="sr-only">Members</span>
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
                members: []
            }
        },
        created: function () {
            this.listenToEvents();
        },
        methods: {
            listenToEvents(){
                bus.$on('refreshMembers', (boardMembers) => {
                    this.members = boardMembers;
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
