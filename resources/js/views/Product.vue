<template>
	<div class="product">
		<h6>Single Product Page</h6>
		<p>{{ title }}</p>
		<p>{{ brand }}</p>
		<product-img :img="tbn" :key="tbn"></product-img>
		<list :items="features" key="features"></list>
		<swatches :colors="colors"></swatches>
	</div>
</template>

<script>
import image from "%/Image";
import swatches from "%/Swatches/Swatches";
import list from "%/List/List";
import prettylog from "glweems-prettylogs";
export default {
	name: "product",
	components: {
		list,
		swatches,
		"product-img": image
	},
	data() {
		return {
			id: 0,
			brand: "",
			sku: "",
			title: "",
			fabric: "",
			upgrade: 0,
			features: [],
			colors: [],
			tbn: ""
		};
	},
	created() {
		this.fetchProduct();
		console.clear;
	},
	methods: {
		fetchProduct() {
			const api = "/api/product/" + this.$route.params.sku;
			fetch(api)
				.then(response => {
					return response.json();
				})
				.then(data => {
					prettylog.success("product fetched");
					this.setData(data);
				})
				.catch(err => {
					prettylog.error("product not fetched");
				});
		},
		setData(product) {
			this.id = product.id;
			this.brand = product.brand;
			this.sku = product.sku;
			this.title = product.title;
			this.fabric = product.fabric;
			this.upgrade = product.upgrade;
			this.features = product.features;
			this.colors = product.colors;
			prettylog.success("product set");
			this.findTbn();
		},
		findTbn() {
			prettylog.success("findTbn() Called");
			var i;
			var tbn;
			if (this.title != undefined) {
				for (i = 0; i < this.colors.length; i++) {
					if (this.colors[i].default) {
						this.tbn = productImg(this.sku, this.colors[i].abr);
					}
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
</style>