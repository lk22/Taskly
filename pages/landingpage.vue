<script>
	import Header from '~/components/landingpage/Header'
	import FrontHeading from '~/components/landingpage/FrontHeading'
	import FeatureHeading from '~/components/landingpage/FeatureHeading'
	import axios from 'axios'

	import {api} from '~/globals/API/endpoints'
	export default {
		components: {
			Header,
			FrontHeading,
			FeatureHeading
		},
		
	}
</script>

<template>
	<!-- wrapper -->
	<div class="home container">
		<!-- header component -->
		<Header />

		<!-- page header -->
		<FrontHeading />

		<!-- feature page header -->
		<!-- <FeatureHeading /> -->
	</div>
</template>

<style lang="scss">

	.home {
		max-height: 80vh;
		min-width: 100%;
	}

</style>