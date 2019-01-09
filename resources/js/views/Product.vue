<template>
	<div>
		<h6>Single Product Page</h6>
		<p>{{ title }}</p>
		<p>{{ brand }}</p>
		<img class="img-fluid" :src="tbn">
	</div>
</template>

<script>
import prettylog from "glweems-prettylogs";
export default {
	name: "Product",
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
	watch: {},
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
			let path = "";
			if (this.title != undefined) {
				for (i = 0; i < this.colors.length; i++) {
					if (this.colors[i].default) {
						path =
							"@/" +
							this.sku +
							"/" +
							this.sku +
							"_" +
							this.colors[i].abr +
							".jpg";
					}
					this.tbn = path.toLowerCase();
					require(path);
				}
			}
		}
	}
};
</script>

<style scoped>
</style>