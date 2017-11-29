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

            <div class="right">
                <!-- settings button goes here -->
            </div>
        </div>


        <!-- wrap this list in a seperate component -->
        <div class="tasklists-container__list">
          <div class="tasklist" v-if="tasklists" v-for="tasklist in tasklists">
              <table class="table table-hover tasklist-table">
                  <thead class="tasklist-table__header">
                      <tr class="tasklist-table__heading">
                          <td class="heading-name">name</td>
                          <td class="heading-tasks__count">tasks count</td>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td id="tasklist-name-open">
                              {{ tasklist.name }}
                          </td>
                          <td>{{ tasklist.tasks_count }}</td>
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
        }

        .tasklists-container__list{
            padding:1.5rem;

            .tasklist{

            }
        }
    }

</style>
