<script>

    import {
        makeRequest
    } from '~/globals'

    import {
        api
    } from '~/globals/API/endpoints'

    export default {
        /**
         * define layout
         */
        layout: 'app',

        /**
         * when mounted
         */
        mounted() {
            //console.log("Tasklist page are rendered", this.tasklists)
        },

        /**
         * define component internal state
         */
        data() {
            return {
                 error: '',
              }
        },

        /**
         * props watcher
         */
        watch: {
            tasklists(val) {
                console.log('taskslist changed', val);
            }
        },

        /**
         * define components to be used in page component
         */
        components: {
            // tasklists component
        },

        /**
         * dispatch tasklists action before page is mounted
         */
        beforeMount() {
            // fetch all tasklists
            this.$store.dispatch('tasklist/getTasklists')
        },

        /**
         * define computed props
         */
        computed: {

            /**
             * the tasklists
            */
            tasklists() {
                // fetch all tasklists
                return this.$store.getters['tasklist/getTasklists']
            }
        }
    }
</script>

<template>
    <div class="tasklists-container">

        <div class="tasklists-container__header">
            <div class="col w-33 left">
                <h3>Tasklists</h3>
            </div>

            <div class="col w-66 right">
                <h5 class="header-settings">Settings <i class="fa fa-cogs"></i></h5>
            </div>
        </div>


        <!-- wrap this list in a seperate component -->
        <div class="tasklists-container__list">
          <div class="tasklist" v-if="tasklists" >
              <table class="table table-light table-responsive-md tasklist-table">
                  <thead class="thead-dark tasklist-table__header">
                      <tr class="tasklist-table__heading">
                          <td class="heading-name">name</td>
                          <td class="heading-tasks__count">tasks count</td>
                          <td class="heading-created_at">created at</td>
                      </tr>
                  </thead>
                  <tbody class="tasklist-table__body">
                      <tr class="body-row" v-for="tasklist in tasklists">
                          <td class="row-name"><nuxt-link to="/"/>{{ tasklist.name }}</nuxt-link></td>
                          <td class="row-tasks__count">{{ tasklist.tasks_count }}</td>
                          <td class="row-created_at">{{ tasklist.created_at }}</td>
                          <td @click="removeTasklist" class="row-archive"><i class="fa fa-archive"></i></td>
                          <td class="row-edit"><i class="fa fa-pencil"></i></td>
                      </tr>
                  </tbody>
              </table>
          </div>
        </div>
    </div>
</template>

<style lang="scss">

    .tasklists-container{
        padding:2rem;

        .tasklists-container__header{
            font-size: 30px;
            min-height: 70px;
            border-bottom: 1px solid #809ed3;
            margin-left:3rem;
            margin-right:3rem;
        }

        .tasklists-container__list{
            padding:1.5rem;

            .tasklist{
                margin-left:10rem;
                margin-right:10rem;

                .tasklist-table{
                    .tasklist-table__header{
                        .tasklist-table__heading{
                            border-top:none;
                        }
                    }
                }
            }
        }
    }
</style>
