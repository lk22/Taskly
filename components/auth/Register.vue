<script>
	import axios from 'axios'
	import {oauth} from '~/globals/API/endpoints'
	import RegisterForm from './register-form'
	export default {

		components: {
			RegisterForm
		}

	}
</script>

<template>
	<!-- register container -->
	<div class="register-container">

		<!-- register container heading -->
		<div class="register-container__heading">
			Register
		</div><!-- register container heading -->

		<RegisterForm/>

	</div><!-- register container end -->
</template>

<style lang="scss">
	.register-container{
		width: 80%;
		margin-left: 10%;
		margin-right: 10%;
		background: #3F51B5;
		color:#fff;
		padding: 5rem;
		margin-top: 2rem;
		border-radius: 5px 5px 5px 5px;

		.register-container__heading{
			text-align: center;
			font-size: 25px;
		}

		.register-container__form-wrapper{
			
		}
	}
</style>
