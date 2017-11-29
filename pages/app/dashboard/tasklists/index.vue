<script>

    import {
        makeRequest
    } from '~/globals'

    import {
        api
    } from '~/globals/API/endpoints'

    export default {
        layout: 'app',
        mounted() {
            //console.log("Tasklist page are rendered", this.tasklists)
        },
        data() {
            return {
                 error: '',
              }
        },

        watch: {
            tasklists(val) {
                console.log('taskslist changed', val);
            }
        },

        components: {
            // tasklists component
        },

        beforeMount() {
            // fetch all tasklists
            this.$store.dispatch('tasklist/getTasklists')
        },

        computed: {
            tasklists() {
                return this.$store.getters['tasklist/getTasklists']
            }
        }
    }
</script>

<template>
    <div class="tasklists-container">

        <div class="tasklists-container__header">
            <div class="left">
                <h3>Tasklists</h3>
            </div>
        </div>

        <!-- wrap this list in a seperate component -->
        <div class="tasklists-container__list">
          <div class="tasklist" v-if="tasklists" v-for="tasklist in tasklists">
              <p class="name">{{ tasklist.name }}</p>
              <p>{{ tasklist.id }}</p>
          </div>
        </div>


    </div>
</template>

<style lang="scss">
</style>
