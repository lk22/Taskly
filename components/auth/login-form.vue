<script>

export default {
    name: 'loginForm',
    data() {
        return {
            error: false,
            username: '',
            password: '',
            message: '',
        }
    },

    /**
     * When mounted
     * @return {[type]} [description]
     */
    mounted() {
        console.log("Login Component mounted")
    },

    computed: {
        feedback() {
            if(this.error){
                this.message = 'Something is wrong with your credentials please double check and try again'
                return this.message
            }

            return this.message
        }
    },

    /**
     * methods bound to component
     * @type {Object}
     */
    methods: {

        /**
         * login the user
         * @return {[type]} [description]
         */
        login() {

            console.log({
                username: this.username,
                password: this.password
            })

            if(
               this.username === '' && this.password === '' ||
               this.username && this.password === '' ||
               this.username === '' && this.password
            ) {
                this.error = true
            } else {

                /**
                 * Dispatch login action
                 */

                     this.$store.dispatch('user/login', {
                        username: this.username,
                        password: this.password
                    }).then(() => {
                        this.$router.replace({path: '/app/dashboard/tasklists'})
                    })

            }
        }
    },
}
// v-if="!$store.state.authUser" 
</script>


<!--
    Login form component template
-->
<template>
    <div>
    <!-- login form container -->
    <div class="login-container__form-container__form">

        <!-- login form -->
        <form @submit.prevent="login" class="login-container__form" method="post">

            <!-- email input group -->
            <div class="form-group">

                <!-- label -->
                <label for="email">
                    Email:
                </label><!-- label end -->

                <!-- email input -->
                <input v-model="username" name="username" type="email" class="form-control username" placeholder="Enter email address" >
            </div><!-- email input group -->

            <!-- password input group -->
            <div class="form-group">

                <!-- label -->
                <label for="password">
                    Password
                </label><!-- label end -->

                <!-- password input -->
                <input v-model="password" name="password" type="password" class="form-control password" placeholder="Enter password" >
            </div>

            <!-- submit button group -->
            <div class="form-group">
                <input type="submit" class="btn btn-primary auth-btn" value="login">
            </div>
        </form><!-- login form -->
        <p class="login-container__error" v-if="error" v-text="feedback">
            
        </p>
    </div><!-- login form container end -->

    </div>
</template>

<!--
    Styling for login form component
-->
<style lang="scss">

    .login-container__form-container__form{
        .login-container__form {

            .form-group{
                margin-bottom:2rem;

                .username, .password{
                    height: 40px;
                    border-radius: 0%;
                    color: #fff;
                    background: transparent;
                    border:none;
                    box-shadow: inset 0px 0px 0px 0px red;
                    border-bottom: 1px solid #000;
                    margin-top: 0.5rem;

                    &:focus{
                        border-bottom: 1px solid #809ed3;
                        background: #809ed3;
                        border-radius: 5px 5px 5px 5px;
                        -webkit-transition: ease-in-out 0.2s all;
                        -moz-transition: ease-in-out 0.2s all;
                        -ms-transition: ease-in-out 0.2s all;
                        -o-transition: ease-in-out 0.2s all;
                        transition: ease-in-out 0.2s all;

                        &::placeholder{
                            color: #fff;
                        }
                    }

                    &:not(:focus) {
                        -webkit-transition: ease-in-out 0.2s all;
                        -moz-transition: ease-in-out 0.2s all;
                        -ms-transition: ease-in-out 0.2s all;
                        -o-transition: ease-in-out 0.2s all;
                        transition: ease-in-out 0.2s all;
                    }

                    &::placeholder {
                        color: #999;
                    }
                }
            }

            .form-group{
                .btn{
                    border-radius: 0%;
                    background: #809ed3;
                    width: 100%;
                    height: 35px;
                    border-radius: 5px 5px 5px 5px;
                }
            }
        }
        .login-container__error{
            margin-top:1rem;
            min-height: 80px;
            width: 100%;
            background: #e74c3c;
            color: #fff;
            border-radius: 5px;
            padding: 1rem;
        }
    }

</style>
