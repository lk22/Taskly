
<!--
	Define scripts here
 -->
<script>
	/**
	 * Define Imports
	 */
	import Header from '~/components/landingpage/Header'
	import Auth from '~/components/auth/login'

	/**
	 * define functionality to login page
	 */
	export default {
		components: {
			Header,
			Auth
		},

		head () {
			return {
				title: 'Taskly Login'
			}
		}
	}
</script>

<!--
	Define Component template
 -->
<template>
	<div class="wrapper login">
		<!--
			Header component
		 -->
		<Header />

		<!--
			Authentication component
		 -->
		<Auth />
	</div>
</template>

<!--
	Define component styling
 -->
<style lang="scss">

	.login{
		height: 700px;
		max-width: 100%;

		background-image: url('~/assets/images/workspace-820315_1920.jpg');
		background-size: cover;
	}

</style>
