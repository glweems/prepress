<template lang="pug">

   items
      .items
         item(v-for="(item, index) in items", :key="item.index")
            img(:src="item.tbn").img-fluid
            .info
               .text
                  h5.title {{ item.title }} {{ key }}
                  p.brand {{ item.brand }}
                  p.brand {{ item.fabric }}
                  p.brand {{ item.key }}
                  router-link(:to="{ name: 'singleProduct', params: {  id: index} }", :key="item.id" )  Select {{ item.id }}
    
</template>

<script>
export default {
    name: "Products",
	data() {
		return {
			items: [
				{
					id: "G500",
					brand: "Gildan",
					title: "Heavy Cotton T-Shirt",
					fabric: "100% Cotton",
                    tbn: require("@/assets/img/shirts/G500/g500_tbn.jpg"),
                    features: [
                        "6 oz. 100% pre-shrunk cotton; Ash, Sports Grey, Heather, Antique, and Safety colors are poly/cotton blends",
                        "Ladies option is the Gildan Ultra Cotton Ladies T-shirt",
                        "Sturdy heavyweight cotton",
                        "Double-needle stitched for durability",
                        "Huge color selection"
                    ],
					colors: [
						{
                            name: "Ash",
                            abr: "ash", 
							hex: "blue",
                            path: require("@/assets/img/shirts/G500/g500_ash.jpg"),
						},
						{
                            name: "Black",
                            abr: "blk", 
							hex: "red",
                            path: require("@/assets/img/shirts/G500/g500_blk.jpg"),
						},
						{
                            name: "Light Pink",
                            abr: "lpnk", 
							hex: "green",
                            path: require("@/assets/img/shirts/G500/g500_lpnk.jpg"),
						},
						{
                            name: "Gravel",
                            abr: "grv", 
							hex: "grey",
                            path: require("@/assets/img/shirts/G500/g500_grv.jpg"),
						}
					]
				},
				{
					id: "C3001",
					brand: "Bella + Canvas",
					title: "Ringspun Cotton T-Shirt",
					fabric: "100% Cotton",
                    tbn: require("@/assets/img/shirts/3001c/3001C_tbn.jpg"),
                    features: [
                        "6 oz. 100% pre-shrunk cotton; Ash, Sports Grey, Heather, Antique, and Safety colors are poly/cotton blends",
                        "Ladies option is the Gildan Ultra Cotton Ladies T-shirt",
                        "Sturdy heavyweight cotton",
                        "Double-needle stitched for durability",
                        "Huge color selection"
                    ],
					colors: [
						{
                            name: "Black",
                            abr: "blk",
                            hex: "#fff", 
                            path: require("@/assets/img/shirts/3001c/3001c_blk.jpg"),
						},
						{
                            name: "Leaf",
                            abr: "lef",
                            hex: "#fff", 
                            path: require("@/assets/img/shirts/3001c/3001c_lef.jpg"),
						},
						{
                            name: "Navy",
                            abr: "nvy",
                            hex: "#fff", 
                            path: require("@/assets/img/shirts/3001c/3001c_nvy.jpg"),
						},
						{
                            name: "Red",
                            abr: "red",
                            hex: "#fff", 
                            path: require("@/assets/img/shirts/3001c/3001c_red.jpg"),
						}
					]
				},
				{
					id: "980",
					brand: "Anvil",
					title: "Lightweight T-Shirt",
					fabric: "100% Cotton",
                    tbn: require("../assets/img/shirts/980/980_tbn.jpg"),
                    features: [
                        "6 oz. 100% pre-shrunk cotton; Ash, Sports Grey, Heather, Antique, and Safety colors are poly/cotton blends",
                        "Ladies option is the Gildan Ultra Cotton Ladies T-shirt",
                        "Sturdy heavyweight cotton",
                        "Double-needle stitched for durability",
                        "Huge color selection"
                    ],
                    colors: [
						{
                            name: "Black",
                            abr: "blk",
                            hex: "#fff", 
                            path: require("@/assets/img/shirts/3001c/3001c_blk.jpg"),
						},
						{
                            name: "Leaf",
                            abr: "lef",
                            hex: "#fff", 
                            path: require("@/assets/img/shirts/3001c/3001c_lef.jpg"),
						},
						{
                            name: "Navy",
                            abr: "nvy",
                            hex: "#fff", 
                            path: require("@/assets/img/shirts/3001c/3001c_nvy.jpg"),
						},
						{
                            name: "Red",
                            abr: "red",
                            hex: "#fff", 
                            path: require("@/assets/img/shirts/3001c/3001c_red.jpg"),
						}
					]
				}
            ],
		};
    },
    computed: {
        imgPath() {
            return this.items
        }
    },
    created() {
        if (this.item.img) {
            this.item.img.hex = this.item.id
        }
    }
};
</script>

<style lang="sass">
// @import "@/assets/sass/app.sass"
img
   max-width: 80%
.items
    width: 100%
    display: grid
    grid-gap: .45em
    .item
        display: grid
        border: 1px solid black
        border-radius: .25em
        background: white
        grid-template-columns: auto 3fr
        margin: 0 1em
        img
            padding: .5em
            max-height: 7em
            align-self: center
            background: lightblue
.info
.title
    padding-top: 1vh
    font-size: 15px
.brand
    font-size: 13px

.swatches 
    display: grid
    grid-template-columns: 1fr 1fr
.swatch
    width: 1em
    height: 1em
</style>
