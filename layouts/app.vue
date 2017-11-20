<script>

    import TasklyHeader from '~/components/app/components/Header'
    export default {
        components: {
            TasklyHeader
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
