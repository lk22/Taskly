<script>
import user from '~/store/user.js'
export default {
    name: 'TasklyHeader',
    data() {
        return {
            searchString: '',
            searchError: '',
        }
    },

    methods: {
        createSearchFromString( event ) {
            if ( !this.searchString ) {
                this.searchError = 'your search string is empty try again.'
            } else if ( this.searchString.valueOf('task: ' + event.value)) {
                // fire action to search for tasks
            } else if ( this.searchString.valueOf('tasklist: ' + event.value) ){
                // fire action to search for tasklists
            } else if ( this.searchString.value('place: ' + event.value) ) {
                // fire action to search for tasks that has place attached
            }
        }
    },

    computed: {
        username() {
            return this.$store.getters['user/getFullName'];
        }
    }
}

</script>

<template>

    <!-- header wrapper -->
    <div class="dashboard-header container-fluid">
        <!-- columns -->
        <div class="container row">
            <!-- left header -->
            <div class="col col-md-3 dashboard-header__left">
                <!-- left inner -->
                <div class="left-inner">
                    <!-- left inner menu -->
                    <div class="left-inner__menu">
                        <i class="fa fa-reorder"></i>
                    </div> <!-- left inner menu end -->
                </div> <!-- left inner end -->
            </div> <!-- left header end -->
            <!-- center column-->
            <div class="col col-md-6 dashboard-header__center">
                <!-- center inner -->
                <div class="center-inner">
                    <!-- center inner search bar -->
                    <div class="center-inner__searchBar">
                        <!-- search form -->
                        <form class="searchBar-form" action="#" method="post">
                            <!-- search bar string input field -->
                            <div class="form-group searchBar-form__string">
                                <input
                                    v-model="searchString"
                                    @click="createSearchFromString"
                                    type="text"
                                    class="form-control searchString"
                                    name="searchString"
                                    placeholder="Search..."
                                >
                            </div><!-- search bar string input field end -->
                        </form><!-- search form end -->
                    </div> <!-- center inner search bar end -->
                </div> <!-- center inner end -->
            </div> <!-- center column end -->

            <!-- right header colomn -->
            <div class="col col-md-3 dashboard-header__right">
                <!-- right inner wrapper -->
                <div class="right-inner">
                    <!-- right inner user container -->
                    <div class="right-inner__user">
                        <!-- user -->
                        <div class="user">
                            <h4 class="username">{{ username }}</h4>
                        </div> <!-- user end -->
                    </div> <!-- right inner container end -->
                </div> <!-- right inner wrapper end -->
            </div> <!-- right header column end -->
        </div> <!-- columns end -->
    </div> <!-- header wrapper end -->

</template>;

<style lang="scss">

    // dashboard header wrapper
    .dashboard-header{
        min-height: 80px;
        width: 100%;
        background: #809ed3;
        margin:0px;

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

        // right header column
        .dashboard-header__right{
            // right inner
            .right-inner{
                padding: 1.5rem;

                // right inner user
                .right-inner__user{
                    margin-top: 0.5rem;

                    // user
                    .user {
                        float:right;

                        .username { text-align: right; color: #fff;}
                    }
                }
            }
        }
    }
</style>
