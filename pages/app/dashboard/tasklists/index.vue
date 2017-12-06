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
                 success: '',
                 name: ''
              }
        },

        methods: {
            removeTasklist(id) {
                try {
                    this.$store.dispatch('tasklist/delete', {id}).then((response) => {
                        this.$store.dispatch('tasklist/getTasklists')
                    })
                } catch ( error ) {
                    this.error = error
                }

            },

            createTasklist(evt) {

                evt.preventDefault()

                if( this.name === '' ) {
                    this.error = 'You need to add a name for your tasklist try again.'
                } else {
                    this.name = document.getElementById('name').value
                    console.log(this.name)
                    this.$store.dispatch('tasklist/create', this.name).then((response) => {
                        this.$store.dispatch('tasklist/getTasklists')
                    })
                }
            },

            showTasklistFormModal() {
                this.$refs.tasklistsModalRef.show()
                this.error = ''
            },
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

        <div class="container tasklists-container__header">
            <div class="row">
                <div class="col-10 left">
                    <h5>Tasklists</h5>
                </div>
                <div class="col-2 right settings">

                    <!-- bootstrap dropdown component -->
                    <b-dropdown id="settings-dropdown" text="Settings" class="btn btn-primary">
                        <b-dropdown-item @click="showTasklistFormModal">
                            <b-btn v-b-modal.modalPrevent>Create new tasklist</b-btn>
                        </b-dropdown-item>
                    </b-dropdown><!-- bootstrap dropdown component end -->

                </div>
            </div>
        </div>


        <!-- wrap this list in a seperate component -->
        <div class="container tasklists-container__list">
          <div class="tasklist" v-if="tasklists">
              <table class="table table-light table-responsive-md tasklist-table">
                  <thead class="thead-dark tasklist-table__header">
                      <tr class="tasklist-table__heading">
                          <td class="heading-name">name</td>
                          <td class="heading-tasks__count">tasks count</td>
                          <td class="heading-created_at">created at</td>
                      </tr>
                  </thead>
                  <tbody class="tasklist-table__body">
                      <tr class="body-row" v-for="tasklist in tasklists" :key="tasklist.slug">
                          <td class="row-name"><nuxt-link :to="'/app/dashboard/tasklists/'+tasklist.slug">{{ tasklist.name }}</nuxt-link></td>
                          <td class="row-tasks__count">{{ tasklist.tasks_count }}</td>
                          <td class="row-created_at">{{ tasklist.created_at }}</td>
                          <td class="row-archive"><i v-on:click="removeTasklist(tasklist.id)" class="fa fa-archive"></i></td>
                          <td class="row-edit"><i class="fa fa-pencil"></i></td>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <div class="no-tasklists container-fluid" v-if="!tasklists">
              <h4 class="text-center">You have no tasklists assigned</h4>
          </div>
        </div>

        <!-- bootstrap modal component -->
        <b-modal refs="tasklistsModalRef"
                 @ok="createTasklist"
                 id="modalPrevent"
                title="New tasklist"
                hide-footer>

            <div class="d-block text-center">
                <h3>Create new tasklist</h3>

                <!-- bootstrap form component -->
                <b-form @submit.stop.prevent="createTasklist">
                    <!-- form group component -->
                    <b-form-group id="nameInput"
                                  label="Name"
                                  description="The name of the tasklist">
                        <!-- form input component -->
                        <b-form-input id="name"
                                      type="text"
                                      v-model="name"
                                      name="name"
                                      placeholder="Enter name">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group id="submitGroup">
                        <b-button type="submit" variant="primary">Save</b-button>
                    </b-form-group>

                    <!-- if any error -->
                    <div class="error-container" v-if="error">
                        <b-alert @click="createTasklist" show variant="danger">{{error}}</b-alert>
                    </div>
                </b-form>
            </div>
        </b-modal>

        <!-- if the tasklist is created with success -->
        <div class="success-container" v-if="success">
            <b-alert show variant="success">{{success}}</b-alert>
        </div>
    </div>


</template>

<style lang="scss">

    .tasklists-container{
        padding:2rem;

        .tasklists-container__header{
            font-size: 30px;
            height: 40px;
            border-bottom: 1px solid #809ed3;
            margin-left:3rem;
            margin-right:3rem;

            .right{
                .btn{
                    background: transparent;
                    color: #000;
                    border:none;
                    box-shadow: none;
                }
            }
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

                    .tasklist-table__body{
                        .body-row{
                            // archive button
                            .row-archive{
                                .fa.fa-archive{
                                        color: #809ed3;
                                }
                            }

                            .row-edit {
                                .fa-pencil{
                                    color: #809ed3;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
