<script>
    export default {
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
                error: ''
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

            }
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
            console.log(params)
        }
    }
</script>

<template lang="html">
  <!-- task-container -->
  <div class="container-fluid task-container">
      <!-- header -->
      <div class="row tasks-container__header">
          <div class="col-10 header-tasklist__name">
              <!-- tasklist name here -->
          </div>
          <div class="col-2 header-tasklist__settings">
              <!-- configuration icon button fa-cog -->
          </div>
      </div>
      <!-- tasks list wrapper -->
      <div class="row tasks-container__body">

      </div>

  </div>
</template>

<style lang="scss">

</style>
