<script>
    //import TasklyHeader from '~/components/app/components/Header.vue'
    import Sidebar from '../components/app/components/Sidebar.vue'

    /**
     * bootstrap components
     * @type {String}
     */
    import {
        Button, // button component
        Popover, // popover component
        Badge, // badge component
        Alert, // alert component
        Dropdown, // dropdown component
        Modal, // modal component
        Form // form component
    } from 'bootstrap-vue/es/components';


    export default {
        components: {
            // Taskly specific components
            //TasklyHeader,
            Sidebar,

            // Bootstrap components
            Badge,
            Popover,
            Button,
            Alert
        }
    }

</script>

<template>
    <div>
        <!-- app dashboard wrapper -->
        <div id="app" class="app dashboard-wrapper">

            <!-- app header-->
            <!--<TasklyHeader/>-->

            <!-- inner container -->
            <div class="dashboard-wrapper__inner">
                <Sidebar/>

                <!-- content container -->
                <div class="dashboard-content">
                    <!-- dashboard page content -->

                    <nuxt/>
                </div>
            </div> <!-- inner container end -->
        </div>
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
