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

</template>

<style lang="scss">

</style>
