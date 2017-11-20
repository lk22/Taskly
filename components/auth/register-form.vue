<script>
	import axios from 'axios'
	import {oauth} from '~/globals/API/endpoints'
	export default {

		/**
		 * define data properties
		 * @return {[type]} [description]
		 */
		data() {
			return {
				firstname: '',
				lastname: '',
				email: '',
				password: '',
				c_password: '',
				error: '',
				inputs: [
					'firstname',
					'lastname',
					'email',
					'password'
				],
				success: ''
			}
		},

		/**
		 * When mounted
		 * @return {[type]} [description]
		 */
		mounted() {
			console.log("register Component mounted")
		},

		/**
		 * Methods bound to component
		 * @type {Object}
		 */
		methods: {
			async register() {
				console.log({
					firstname: this.firstname,
					lastname: this.lastname,
					email: this.email,
					password: this.password,
					c_password: this.c_password
				})

				/**
				 * validate input
				 */
				if (
				    this.firstname && this.lastname === '' && this.email === '' && this.password === '' ||
				    this.firstname && this.lastname === '' && this.email === '' && this.password === '' ||
				    this.firstname && this.lastname && this.email === '' && this.password === '' ||
				    this.firstname && this.lastname && this.email && this.password === ''
 				) {
					this.error = "Something went wrong with your registration we figured out you didn't fill out every field correctly"
 				}
 				else if (
 				    this.c_password === '' ||
 				    this.c_password != this.password
 				) {
 					this.error = "password is not the same"
 				} else {

					await this.$store.dispatch('user/register', {
						firstname: this.firstname,
						lastname: this.lastname,
						email: this.email,
						password: this.password,
						c_password: this.c_password
					}).then((response) => {
						console.log(response)
						this.success = 'Your Account is successfully created'
					}).then((error) => {
						if ( error.response.status === 500 ) {
							this.error = "Something went wrong creating your account"
						}
					})

 				}

			}
		}

	}
</script>


<template>
    <!-- register container form container -->
    <div class="register-container__form-wrapper">

        <!-- register form container -->
        <div class="register-container__form-wrapper__form">

            <form @submit.prevent="register" method="post" class="register-container__form">

                <!-- firstname input group -->
                <div class="input-group">

                    <!-- label -->
                    <label for="name">
                        firstname
                    </label><!-- label end -->

                    <!-- email input -->
                    <input v-model="firstname" name="firstname" type="text" class="input" placeholder="Enter firstname" >
                </div><!-- firstname input group -->

                <!-- lastname input group -->
                <div class="input-group">

                    <!-- label -->
                    <label for="name">
                        lastname
                    </label><!-- label end -->

                    <!-- email input -->
                    <input v-model="lastname" name="lastname" type="text" class="input" placeholder="Enter lastname" >
                </div><!-- lastname input group -->

                <!-- password input group -->
                <div class="input-group">

                    <!-- label -->
                    <label for="email">
                        Email
                    </label><!-- label end -->

                    <!-- password input -->
                    <input v-model="email" name="email" type="email" class="input" placeholder="Enter email" >
                </div>

                <!-- password input group -->
                <div class="input-group">

                    <!-- label -->
                    <label for="password">
                        Password
                    </label><!-- label end -->

                    <!-- password input -->
                    <input v-model="password" name="password" type="password" class="input" placeholder="Confirm password" >
                </div>

                <!-- password input group -->
                <div class="input-group">

                    <!-- label -->
                    <label for="password">
                        Password Confirmation
                    </label><!-- label end -->

                    <!-- password input -->
                    <input v-model="c_password" name="password_confirm" type="password" class="input" placeholder="confirm password" >
                </div>

                <!-- submit button group -->
                <div class="submit-group">
                    <input @click="register" type="submit" class="button is-primary" value="login">
                </div>

            </form>

            <div v-if="error" class="register-container__error">
                <p class="error">{{ error }}</p>
            </div>

        </div><!-- register form container -->

    </div><!-- register container form container end -->
</template>

<style lang="scss">

    .register-container__form-wrapper__form{
        .register-container__form{
            .input-group{
                margin-bottom: 2rem;

                .input{
                    height: 40px;
                    border-radius: 0%;
                    color: #fff;
                    background: transparent;
                    border:none;
                    box-shadow: inset 0px 0px 0px 0px red;
                    border-bottom: 1px solid #fff;
                    margin-top: 0.5rem;


                    &:focus{
                        // border-bottom: 1px solid #2ecc71;
                        background: #fff;
                        color: #000;
                        -webkit-transition: ease-in-out 0.2s all;
                        -moz-transition: ease-in-out 0.2s all;
                        -ms-transition: ease-in-out 0.2s all;
                        -o-transition: ease-in-out 0.2s all;
                        transition: ease-in-out 0.2s all;

                        &::placehoder {
                            color: #000;
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
        }

        .register-container__error{
            min-height: 50px;
            background: #F44336;
            margin-top: 2rem;
            padding: 1rem;
            text-align: center;
            border-radius: 5px 5px 5px 5px;
        }
    }

</style>
