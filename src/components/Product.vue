<template lang="pug">
.product

	//- Single Product View
	.card(v-if="view('product')")
		.card-content
			p.title.is-5 {{item.title}}
			p.subtitle.is-6 {{ item.brand }}
			.media-content
				el-carousel(:autoplay="false", key="images", arrow="always")
					el-carousel-item(v-for="(color, index) in item.colors", :key="color.name")
						img#item-img(:src="color.path")
			Swatches(:item="item")
			.content
				.quote-btn
					el-button(type='success' @click="getQuote()" plain) Get Quote
				.features
					ul
						template(v-for="(feature, index) in item.features")
							li {{ feature }}
				
	//- Multi Product View
	template(v-if="view('products')")
		.card
			header.card-header
				slot(name="title")

			.card-content
				.media
					.media-left
						figure.image.is-96x96
							slot(name="img")
					.media-content
						slot(name="brand")
						slot(name="fabric")
						slot(name="swatches")
						slot(name="link")
			
	//- Calculator Product View
	template(v-if="view('quoteId')")
		.card
			.card-content
				.media
					.media-left
						figure.image.is-64x64
							img(:src="color.path")
					.media-content
						p.title.is-5 {{item.title}}
						p.subtitle.is-6 {{ item.brand }}
				.content
					|	Color: {{ color.name }}
					
</template>

<script>
import Swatches from "@/components/Swatches"
export default {
	name: "Product",
	props: ["items"],
	components: {
		Swatches
	},
	data() {
		return {};
	},
	computed: {
		route() {
			return this.$route.name;
		},
		id() {
			return this.$route.query.id;
		},
		item() {
			var id = this.id;
			var item = this.items.find(item => item.id == id);
			return item;
		},
		colorName() {
			let name = this.$route.query.color;
			if (name == undefined) {
				name = this.item.colors[0].abr;
			}
			return name;
		},
		color() {
			let color = this.item.colors.find(
				color => color.abr == this.colorName
			);
			return color;
		},
		img() {
			return this.color.path;
		}
	},
	methods: {
		view(name) {
			var route = this.route;
			if (route == name) {
				return true;
			}
		},
		getQuote() {
			var obj = {
				path: "/calculator",
				query: {
					id: this.item.id,
					color: this.color.abr
				}
			};
			this.$router.push(obj);
		}
	}
};
</script>

<style lang="sass" scoped>
@import "@/sass/main.sass"

.product
	.card-content
		text-align: left
	text-align: center

	.quote-btn
		text-align: center
		padding: .25em
		.el-button
			width: 90%

.el-carousel
	background: white
	img
		padding: 1.25em
		// max-width: 80%

.features
	// padding-top: 1em
	text-align: left
</style>
