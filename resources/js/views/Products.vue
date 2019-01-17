<template>
	<div>
		<p>Styles</p>
		<div v-for="style in styles" :key="style.style">
			<p>{{ style.style }}</p>
			<img :src="style.img">
			<p>Products: {{ style.count }}</p>
			<div v-for="(product, index) in style.products" :key="index">
				<p>{{ product.title }}</p>
				<p>{{ product.upgrade }}</p>
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
			styles: ""
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
					prettylog.success("Success: Data Fetched");
				})
				.catch(err => {
					prettylog.danger("Error: Data Not Fetched");
				});
		},
		makePagination(meta, links) {
			let pagination = {
				currentPage: meta.current_page,
				lastPage: meta.last_page,
				nextPage: links.next,
				prevPage: links.prev
			};
			this.pagination = pagination;
			// fetch(helpers.getProductApi(this.$route.params.sku))
			// 	.then(response => {
			// 		return response.json();
			// 	})
			// 	.then(data => {
			// 		this.product = data;
			// 		prettylog.success("Success: '" + data.sku + "' fetched.");
			// 	})
			// 	.catch(err => {
			// 		prettylog.danger("Error: Product Not Fetched");
			// 	});
		}
	}
};
</script>

<style scoped>
</style>