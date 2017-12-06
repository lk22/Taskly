<script>
    export default {
        layout: 'app',

        /**
         * |-----------------------------------------
         * |    internal component state date
         * |    @return {[type]} [description]
         * |----------------------------------------
         */
        data() {

            // return state
            return {
                // error message
                error: '',
                noTasksMsg : 'You have currently no tasks assigned to this tasklist'
            }
        },

        /**
         * |-----------------------------------------
         * |    component prop watcher
         * |    @return {[type]} [description]
         * |----------------------------------------
         */
        watch: {
            tasks(val) {
                console.log('taskslist changed', val);
            }
        },

        /**
         * |-----------------------------------------
         * |    component methods
         * |    @return {[type]} [description]
         * |----------------------------------------
         */
        methods: {

            // fetching the single tasklist
            getTasklist() {

            },

            // remove a task from the list
            removeTask() {

            },

            // create a new task to the tasklist
            createTask() {

            },

            // update the existing task
            updateTask() {

            },

            // complete task
            completeTask() {

            },

            // uncomplete task
            uncompleteTask() {

            },

            // complete all tasks
            completeAllTasks() {

            },

            // modals

                // create new task modal
                openCreateNewTaskModal() {
                    // this.$refs.newTaskModal.show()
                },

        },

        /**
         * |-----------------------------------------
         * |    computed component properties
         * |    @return {[type]} [description]
         * |----------------------------------------
         */
        computed: {

            // tasks property
            tasks() {
                // dispatch getter method to fetch every task
            }
        },

        /**
         * |-----------------------------------------
         * |    before the component is mounting
         * |    @return {[type]} [description]
         * |----------------------------------------
         */
        beforeMount() {
            // dispatch action to fetch every task on a list
        },

        /**
         * |-----------------------------------------
         * |    when the component is mounted
         * |    @return {[type]} [description]
         * |----------------------------------------
         */
        mounted() {
            console.log("Task page mounted successfulle")
        },

        /**
         * |-----------------------------------------
         * |    Validator for dynamic params
         * |    @return {[type]} [description]
         * |----------------------------------------
         */
        validate ({params}) {
            return params
        }
    }
</script>

<template>
  <!-- task-container -->
  <div class="container tasks-container">
      <!-- header -->
      <div class="row tasks-container__header">
          <div class="col-10 header-tasklist__name">
              <!-- tasklist name here -->
              <h4>tasklist</h4>
          </div>
          <div class="col-2 header-tasklist__settings">
              <!-- configuration icon button fa-cog -->
              <i class="fa fa-cog"></i>
          </div>
      </div>
      <!-- tasks list wrapper -->
      <div class="row tasks-container__body" v-if="tasks">

      </div>

      <div class="row no-tasks-container">
          <b-alert variant="info" show>
              <h4 class="text-center">{{ noTasksMsg }}</h4>
              <div class="create-task">
                  <h5>Create your new tasklist here</h5>
                  <b-button v-on:click="openCreateNewTaskModal" variant="primary">Create Tasklist</b-button>
              </div>
          </b-alert>
      </div>

  </div>
</template>

<style lang="scss">

    .tasks-container{
        min-height:900px;
        width: 100%;

        .tasks-container__header{
            height: 80px;
            width: 100%;
            border-bottom: 1px solid #809ed3;

            .header-tasklist__name, .header-tasklist__settings{
                padding:2rem;
            }

            .header-tasklist__settings > .fa{;
                cursor: pointer;
                font-size: 20px;

                &:hover{
                    color: #809ed3;
                    transition: ease-in-out 0.2s all;
                }

                &:not(:hover) {
                    transition: ease-in-out 0.2s all;
                }
            }
        }

        .no-tasks-container{
            display:flex;
            justify-content: center;
            align-self: center;
            margin-top:5rem;

            .alert{
                padding:3rem;
            }
        }
    }

</style>
