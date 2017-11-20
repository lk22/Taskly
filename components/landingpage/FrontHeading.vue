<template>
	<!-- page header -->
		<div class="frontliner">
			<div class="columns">
				<div class="column is-6 page-heading__left">
					<div class="page-heading__left-header">
						<img src="~/assets/images/tasklist_icon.png" height="450" width="450" alt="">
					</div>
				</div>
				<div class="column is-6 page-heading__right">
					<div class="page-heading__right-header">
						<h2 class="is-size-1">Hold styr på din dagligdag.</h2>
						<h4 class="is-size-4">på dit arbejde og ude for arbejdet</h4>
					</div>
				</div>
			</div>
		</div>
</template>

<style lang="scss">

	.frontliner{
		width: 100%;
		min-height:450px;

		.page-heading__left {
			padding: 3rem;
		}

		.page-heading__left > .page-heading__left-header{
			padding-top: 3rem;
		}

		.page-heading__right {
			background: #009688;
			color: #fff;
			min-height:618px;
		}

		.page-heading__right > .page-heading__right-header {
			padding: 2rem;
			h2{padding-top:6rem;}
			h4{padding-top:5rem;}
		}
	}

</style>