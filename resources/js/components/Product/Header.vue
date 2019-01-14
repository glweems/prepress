<template>
	<div class="product-header">
		<div class="product-header-content border">
			<p class="product-title text-big border-bottom">{{ title }}</p>
			<div class="info-bar">
				<p class="info-item">{{ brand }}</p>
				<p class="info-item">{{ fabric }}</p>
				<p class="info-item">{{ upgrade }}</p>
				<p class="info-item color" :style="colorStyle">{{ color.title }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { invertColor } from "mixins";
export default {
	components: {
		"product-img": () =>
			import(/* webpackChunkName: "product-img" */ "Elements/Img")
	},
	props: {
		title: { type: String },
		brand: { type: String },
		fabric: { type: String },
		upgrade: { type: Number },
		color: { type: Object },
		img: { type: String }
	},
	computed: {
		colorStyle() {
			return {
				background: this.color.hex,
				color: invertColor(this.color.hex)
			};
		}
	}
};
</script>

<style lang="scss" scoped>
	@import "sassy";
	.product-header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 0.5em;
	}
	.product-header-content {
		background: white;
		width: 90%;
		justify-self: center;
		// margin: 0.5em 0.25em 0.25em;
		max-width: 100% !important;
	}
	.product-title {
		text-align: center;
		margin-bottom: 0 !important;
		// padding: 0.5em 0 0 0 !important;
	}
	.info-bar {
		display: flex;
		align-items: center;
		justify-content: center;
		color: $light-darker !important;
		background: $light;
		.info-item {
			padding: 0 0.5em;
			margin: 0.25em 0.5rem !important;
		}
		.color {
			border-radius: 3px;
		}
	}
	img {
		padding: 1em;
		// margin: 1em;
	}
</style>