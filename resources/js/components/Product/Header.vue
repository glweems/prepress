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
import image from "Elements/Img";
import prettylog from "glweems-prettylogs";

export default {
	components: { "product-img": image },
	props: {
		title: { type: String },
		brand: { type: String },
		img: { type: String }
	}
};
</script>

<style lang="scss" scoped>
</style>