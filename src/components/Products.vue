<template lang="pug">
router-view(:items="items")
	List(:items="items")
	Product(:items="items")
		//- Product
		//- Product(:item="items")
//- .items
//- 	template(v-for="item in items")
//- 		.item
//- 			h6.title.is-4 {{ item.title }}
//- 			img(:src="tbn(item)" @click="imgClick(item)").card
//- 			.info
//- 				.text
//- 					router-link(:to="link(item)", :key="item.id").button.is-link  Select
</template>

<script>
import List from "@/views/Product/List";
import Product from "@/views/Product/Product";
export default {
  name: "Products",
  //   props: ["items"],
  components: { Product, List },
  data() {
    return {
      items: [
        {
          id: "G500",
          brand: "Gildan",
          title: "Heavy Cotton T-Shirt",
          fabric: "100% Cotton",
          price: 1,
          tbn: 0,
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
              hex: "#c1c1c1",
              path: require("@/assets/img/shirts/G500/g500_ash.jpg")
            },
            {
              name: "Black",
              abr: "blk",
              hex: "#191919",
              path: require("@/assets/img/shirts/G500/g500_blk.jpg")
            },
            {
              name: "Light Pink",
              abr: "lpnk",
              hex: "#eebfc5",
              path: require("@/assets/img/shirts/G500/g500_lpnk.jpg")
            },
            {
              name: "Gravel",
              abr: "grv",
              hex: "#767070",
              path: require("@/assets/img/shirts/G500/g500_grv.jpg")
            }
          ]
        },
        {
          id: "C3001",
          brand: "Bella + Canvas",
          title: "Ringspun Cotton T-Shirt",
          fabric: "100% Cotton",
          price: 3,
          tbn: 0,
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
              path: require("@/assets/img/shirts/3001c/3001c_blk.jpg")
            },
            {
              name: "Leaf",
              abr: "lef",
              hex: "#298c30",
              path: require("@/assets/img/shirts/3001c/3001c_lef.jpg")
            },
            {
              name: "Navy",
              abr: "nvy",
              hex: "#13164d",
              path: require("@/assets/img/shirts/3001c/3001c_nvy.jpg")
            },
            {
              name: "Red",
              abr: "red",
              hex: "#ae2324",
              path: require("@/assets/img/shirts/3001c/3001c_red.jpg")
            }
          ]
        },
        {
          id: "980",
          brand: "Anvil",
          title: "Lightweight T-Shirt",
          fabric: "100% Cotton",
          price: 2,
          tbn: 0,
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
              hex: "black",
              path: require("@/assets/img/shirts/980/980_blk.jpg")
            },
            {
              name: "Spring Yellow",
              abr: "spyl",
              hex: "#d0c778",
              path: require("@/assets/img/shirts/980/980_spyl.jpg")
            },
            {
              name: "Navy",
              abr: "nvy",
              hex: "#11113e",
              path: require("@/assets/img/shirts/3001c/3001c_nvy.jpg")
            },
            {
              name: "Red",
              abr: "red",
              hex: "#aa1d3b",
              path: require("@/assets/img/shirts/3001c/3001c_red.jpg")
            }
          ]
        }
      ]
    };
  },
  methods: {
    //   Construct thumbnail
    tbn(item) {
      var tbn = item.tbn;
      var path = item.colors[tbn].path;
      return path;
    },
    // Construct router-link obj
    link(item) {
      var id = item.id;
      var tbn = item.tbn;
      var color = item.colors[tbn].abr;
      // Create obj
      var obj = {
        name: "singleProduct",
        path: "/products/id/" + id,
        params: { id: id },
        query: { color: color }
      };

      return obj;
    },
    // Click Img to go to item
    imgClick(item) {
      var link = this.link(item);
      this.$router.push(link);
    }
  }
};
</script>

<style lang="sass" scoped>

img
	width: 65%
.card
	border-radius: 1.5vw
	margin-bottom: 1vh
	padding: 3vw
.item
	margin-bottom: 3vh
	padding-bottom: 2vh
</style>
