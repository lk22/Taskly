<script>
    import TasklyHeader from '~/components/app/components/Header'

    /**
     * bootstrap components
     * @type {String}
     */
    import {
        Button, // button component
        Popover, // popover component
        Badge, // badge component
        Alert // alert component
    } from 'bootstrap-vue/es/components';


    export default {
        components: {
            // Taskly specific components
            TasklyHeader,

            // Bootstrap components
            Badge,
            Popover,
            Button,
            Alert
        }
    }

</script>

<template>
    <!-- app dashboard wrapper -->
    <div class="app dashboard-wrapper">

        <!-- app header-->
        <TasklyHeader/>

        <!-- inner container -->
        <div class="dashboard-wrapper__inner">

            <!-- content container -->
            <div class="dashboard-content">
                <!-- dashboard page content -->
                <nuxt/>
            </div>

        </div> <!-- inner container end -->

    </div>
</template>


<style lang="scss">

    /**
     * main app layout styles
     * @type {[type]}
     */

    .app{
        height: 100%;
        width: 100%;

        /**
         * dashboard
         * @type {[type]}
         */

        &.dashboard {
            min-height: 750px;
            width: 100%;
            background:#ddd;

            /**
             * inner
             * @type {[type]}
             */

            .dashboard-wrapper__inner{
                height: auto;
                width: auto;

                /**
                 * dashboard content wrapper
                 */
                .dashboard-content{
                    color: #000;
                }

            }
        }
    }

</style>
