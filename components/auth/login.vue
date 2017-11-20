<script>
	/**
	 * Define imports here
	 */
	import { log } from '~/globals'

	/**
	 * template child components
	 * @type {String}
	 */
	import LoginForm from './login-form'

	/**
	 * define functionality to login component
	 */
	export default {

		/**
		 * define data props
		 * @return {[type]} [description]
		 */
		data() {
			return {
				error: '',
				username: '',
				password: ''
			}
		},

		components: {
			LoginForm
		}

		/**
		 * Computed properties
		 * @type {Object}
		 */
		// computed: {
		// 	username: {
		// 		set() {
		// 			if(
		// 			   this.username === '' && this.password === '' ||
		// 			   this.username && this.password === '' ||
		// 			   this.username === '' && this.password
		// 			) {
		// 				this.error = 'Something is wrong with your credentials please double check and try again'
		// 			}
		// 		}
		// 	}
		// }
	}
</script>

<!--
	Component template
 -->
<template>
	<!-- login container -->
	<div class="login-container">

		<!-- login container heading -->
		<div class="login-container__heading">
			Sign in to your account
		</div> <!-- login container heading end -->

		<!-- login form wrapper -->
		<div class="login-container__form-container">

			<!-- login form -->
			<LoginForm/>

		</div> <!-- login form wrapper end -->
	</div>
</template>

<!--
	Component styles
 -->
<style lang="scss">
	.login-container{
			width: 50%;
			margin-left:25%;
			margin-right: 25%;
			background: #fff;
			color: #000;
			padding:5rem;
			margin-top:2rem;
			border-radius:5px 5px 5px 5px;
			height: 500px;

			.login-container__heading{
				text-align: center;
				font-size:25px;
				margin-bottom: 2rem;
			}

			.login-container__form-container{

			}
		}
</style>
