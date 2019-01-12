<template>
	<div class="product">
		<p>{{ title }}</p>
		<p>{{ brand }}</p>
		<product-img :img="img" :key="img"></product-img>
	</div>
</template>

<script>
import {
	productImg,
	defaultProductColor,
	getProductApi,
	colorFromRoute
} from "#/helpers";
import prettylog from "glweems-prettylogs";

export default {
	components: {
		"product-img": () =>
			import(/* webpackChunkName: "product-img" */ "Elements/Img")
	},
	props: {
		title: { type: String },
		brand: { type: String },
		img: { type: String }
	}
};
</script>

<style lang="scss" scoped>
</style>