<template lang="pug">
.products-item(@click="link()" @item="item=$event")
	img(:src="tbn")
	.info 
		p.item-title {{ item.title }}
		p.item-brand {{ item.brand }}
		i.fas.fa-dollar-sign(v-for="index in icon(item.upgrade)")
		.border-bottom
	    
</template>

<script>
export default {
	name: "ProductListItem",
	props: ["item"],
	created() {
		this.$emit("product", this.item);
	},
	data() {
		return {};
	},
	methods: {
		link() {
			let dest = this.url;
			this.$emit("product", this.item);
			this.$router.push(dest);
		},
		icon(upgrade) {
			var arr = [];
			var i = 0;
			if (upgrade == 0) {
				upgrade = 1;
			}
			while (i < upgrade) {
				arr.push(i);
				i++;
			}
			return arr;
		}
	},
	computed: {
		url() {
			return {
				name: "product-page-home",
				params: {
					sku: this.item.sku,
					color: this.color.abr
				},
				props: {
					product: this.item
				}
			};
		},
		color() {
			let obj = {};
			var i;
			if (this.$route.name == "browse") {
				for (i = 0; i < this.item.colors.length; i++) {
					if (this.item.colors[i].default) {
						obj = this.item.colors[i];
					}
				}
			} else {
				for (i = 0; i < this.item.colors.length; i++) {
					if (this.item.colors[i].abr == this.$route.params.color) {
						obj = this.item.colors[i];
					}
				}
			}

			return obj;
		},
		tbn() {
			return this.color.path;
		}
	}
};
</script>

<style lang="sass" scoped>
@import "@/sass/main.sass"
.products-item
	display: grid
	grid-template-columns: 2fr 5fr
	margin: .35em
	gap: .75em
	margin: 1em
	padding: .5em .35em
	+product-img
	
	
img
	padding: .1em .5em
	// +product-img
		
.info
	// border-right: 2px solid $primary-light
	
	.item-title
		color: $alt-darker
		font-size: 18px
		
	.item-brand
		color: $alt-light
		font-size: 16px
		font-weight: 400
	
	.item-upgrade
		font-weight: 600
		font-style: italic
		color: $primary
		
	.item-fabric
		color: $dark
		font-size: 14px
		font-weight: 300
			
i
	color: $primary-light	
	padding-left: .1em
</style>
