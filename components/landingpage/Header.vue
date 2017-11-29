<template>
	<div class="container-fluid header taskly-header">
		<div class="row">
			<div class="col col-md-9 navbrand">
				<h1 class="header-navbrand">
					<nuxt-link to="/">Taskly</nuxt-link>
				</h1>
			</div>
			<div class="col col-md-3 navlist">
				<ul class="header-navlist">
					<li class="header-navlist__item">
						<nuxt-link to="/login">Sign in</nuxt-link>
					</li>
					<li class="header-navlist__item">
						<nuxt-link to="register">Sign up</nuxt-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	.taskly-header {
		height: 70px;
		width: 100%;
		padding:1.5rem;
		background: #809ed3;
		color: #fff;
		font-family: fira code;

		.navbrand > .header-navbrand {
			font-size: 20px;
			a{
				color: #fff;
			}
		}

		.navlist > .header-navlist{
			.header-navlist__item{
				display:inline;
				margin-left:1rem;
				a{
					color: #fff;
				}
			}
		}
	}

</style>
