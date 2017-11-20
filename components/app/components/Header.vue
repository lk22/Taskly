<script>

export default {
    name: 'TasklyHeader',
    data() {
        return {
            searchString: '',
            searchError: ''
        }
    },

    methods: {
        createSearchFromString() {
            if ( !this.searchString ) {
                this.searchError = 'your search string is empty try again.'
            } else {
                /**
                 * @todo add search store
                 * @todo add search action
                 * @type {Object}
                 */
            }
        }
    },

    computed: {
        searchString: {
            set( string ) {
                const search = this.searchString
                /**
                 * @todo create a store
                 * @todo add action to set a search string to store
                 */
            },

            get() {
                return this.searchString
            }
        }
    }
}

</script>

<template>

    <!-- header wrapper -->
    <div class="dashboard-header">
        <!-- columns -->
        <div class="columns">
            <!-- left header -->
            <div class="column is-3 dashboard-header__left">
                <!-- left inner -->
                <div class="left-inner">
                    <!-- left inner menu -->
                    <div class="left-inner__menu">
                        <i class="fa fa-reorder"></i>
                    </div> <!-- left inner menu end -->
                </div> <!-- left inner end -->
            </div> <!-- left header end -->
            <!-- center column-->
            <div class="column is-6 dashboard-header__center">
                <!-- center inner -->
                <div class="center-inner">
                    <!-- center inner search bar -->
                    <div class="center-inner__searchBar">
                        <!-- search form -->
                        <form class="searchBar-form" action="#" method="post">
                            <!-- search bar string input field -->
                            <div class="input-group searchBar-form__string">
                                <input
                                    v-model="searchString"
                                    v-keyup.enter="createSearchFromString"
                                    type="text"
                                    class="input searchString"
                                    name="searchString"
                                    placeholder="Search..."
                                >
                            </div><!-- search bar string input field end -->
                        </form><!-- search form end -->
                    </div> <!-- center inner search bar end -->
                </div> <!-- center inner end -->
            </div> <!-- center column end -->
        </div> <!-- columns end -->
    </div> <!-- header wrapper end -->

</template>;

<style lang="scss">

    // dashboard header wrapper
    .dashboard-header{
        min-height: 80px;
        width: 100%;
        background: #809ed3;

        // left header column
        .dashboard-header__left{

            // left header inner
            .left-inner{
                padding: 1rem;

                // menu wrapper
                .left-inner__menu{
                    margin-left: 0.5rem;

                    // hamburger menu
                    .fa-reorder{
                        color: #fff;
                        font-size: 30px;
                        margin-top: 0.5rem;
                    }
                }
            }
        }

        // center header column
        .dashboard-header__center{

            // center inner
            .center-inner{
                padding: 0.5rem;

                // search bar wrapper
                .center-inner__searchBar{
                    margin-top: 1rem;

                    // search bar form
                    .searchBar-form {

                        // search string input
                        .searchString{
                            background: transparent;
                            border:none;
                            border-bottom: 1px solid #fff;
                            box-shadow: inset 0px 0px 0px 0px red;

                            // if focused
                            &:focus {
                                color: #809ed3;
                                background: #fff;

                                transition: ease-in-out 0.2s all;

                                // change placeholder
                                &::placeholder{
                                    color: #809ed3;
                                    transition: ease-in-out 0.2s all;
                                }
                            }

                            // if not focused anymore
                            &:not(:focus) {
                                transition: ease-in-out 0.2s all;
                            }

                            // placeholder settings
                            &::placeholder{
                                color: #fff;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
