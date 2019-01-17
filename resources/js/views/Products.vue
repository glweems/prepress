<template>
	<div>
		<div class="scroll styles">
			<div v-for="style in styles" :key="style.style" class="scroll-item" @click="setStyle(style)">
				<div class="scroll-item style">
					<h3 class="title">{{ style.style }}</h3>
					<div class="img">
						<img :src="style.img" class="rounded-corners">
					</div>
					<p class="info">Products: {{ style.count }}</p>
				</div>
			</div>
		</div>
		<div class="products">
			<div class="product" v-for="product in style.products" :key="product.sku">
				<!-- Card-Wide -->
				<div class="card-wide" @click="goToProduct(product.link)">
					<!-- Card Header -->
					<!-- <div class="card-header">
						<h3 class="header">{{ product.title }}</h3>
					</div>-->
					<!-- Card Body -->
					<div class="card-body">
						<!-- Card Img -->
						<!-- <div class="img"> -->
						<!-- </div> -->
						<img :src="product.img">
						<div class="info">
							<p class="title">{{ product.title }}</p>
							<p>{{ product.brand }}</p>
							<p>{{ product.fabric }}</p>
							<div class="inline">
								<p>Upgrade: {{ product.upgrade }}</p>
								<p>Colors: {{ product.colors.length }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import helpers from "#/helpers";
import prettylog from "glweems-prettylogs";
export default {
	created() {
		this.fetch();
	},
	data() {
		return {
			styles: [],
			style: {}
		};
	},
	methods: {
		fetch() {
			fetch(helpers.stylesApi)
				.then(response => {
					return response.json();
				})
				.then(data => {
					this.styles = data;
					this.style = data[0];
					prettylog.success("Success: Data Fetched");
				})
				.catch(err => {
					prettylog.danger("Error: Data Not Fetched");
				});
		},
		setStyle(style) {
			this.style = style;
			prettylog.success("Style: " + style.style);
		},
		goToProduct(link) {
			this.$router.push({
				path: link
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	@import "sassy";
	.styles {
		.style {
			margin: 0 1em;
			padding: 0.5em 0;
			.title {
				font-size: 1em;
				font-weight: bold;
			}
			.info {
				font-size: 0.75em;
				margin: 0;
				padding: 0;
			}
			.img {
				width: 100%;
				img {
					@include shadow;
					height: 5em;
				}
			}
		}
	}
	.products {
		// margin: 1em 0;
		.product {
			margin: 0.5em;
			@include shadow;
			@include corner;
		}
	}
</style>