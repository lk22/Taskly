<script>
import Header from '~/components/landingpage/Header'
import Register from '~/components/auth/Register'
	export default {
		components: {
			Header,
			Register
		}
	}
</script>

<template>
	<main class="wrapper register">
		<Header/>
		<Register />
	</main>
</template>

<style lang="scss">
	.wrapper .register{
		max-height: 80vh;
		max-width: 100%;
	}
</style>