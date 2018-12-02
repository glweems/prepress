<template lang="pug">

.calculator

	//- Enter QTY
	.step.qty
		.field
			label.label Total Quantity
			.control
				input.input(v-model="qty", type='text', pattern="[0-9]*")
				p.help.is-danger {{ isEnough }}

	br

	//- Pick Locations & Number of Colors
	strong Number of sides being printed

		.feilds.is-grouped
			//- Label
			template(v-for="location in locations")
				.field.has-addons
					.control
						label.button.is-link {{ location.id }}
					
					//- Dropdown
					.control.is-expanded
						.select.is-fullwidth
							select(v-model="location.colors")
								option(v-for="color in screenprint.colors") {{ color }}
				p {{ location }}
	br

	article.message.is-success
		.message-header
			p Your Price
			button.delete(aria-label='delete')
		.message-body
			p {{ job }}
			//- p Shirts: {{ job.text }}
			//- br
			//- p {{ job.locations[0].id }}

	//- Progress Bar
	//- progress.progress.is-small(:value='progress.steps[0]', max='10') 

			
</template>

<script>
import singleProduct from "@/views/SingleProduct";
export default {
  name: "calculator",
  components: {
    singleProduct
  },
  data() {
    return {
      qty: 12,
      locations: [{ id: "Front", colors: 1 }, { id: "Back", colors: 1 }],
      progress: {
        steps: [1, 2, 3, 4, 5, 6]
      },
      screenprint: {
        colors: [0, 1, 2, 3, 4],
        breaks: [12, 24, 36, 100],
        matrix: [
          [10, 9, 8, 7],
          [10.75, 9.5, 8.25, 7.25],
          [11.5, 10.75, 9, 7.5],
          [14.25, 12.5, 9.5, 8]
        ]
      },
      location2: [1.25, 1.5, 1.75, 2],
      colorAbr: this.$route.query.color,
      id: this.$route.params.id,
      items: [
        {
          id: "G500",
          brand: "Gildan",
          title: "Heavy Cotton T-Shirt",
          fabric: "100% Cotton",
          price: 0,
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
              name: "White",
              abr: "wht",
              hex: "#ffffff",
              path: require("@/assets/img/shirts/G500/g500_wht.jpg")
            },
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
          tbn: 2,
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
  computed: {
    job() {
      //  list of job vars
      var obj = {};
      // console.log(obj);

      var qty = this.qty;
      console.log("qty: " + qty);
      // find minimum qty
      var min = this.screenprint.breaks[0];

      var locations = this.locations;

      // Check ready function
      function ready() {
        var result = false;
        if (qty >= min) {
          result = true;
          obj.ready = true;
        }
        return result;
      }

      // Set QTY
      if (ready()) {
        obj.qty = qty;
      }

      // Find locations
      // function getLocations() {
      //   if (ready()) {
      //     var sides = [];
      //     // Get the sides

      //     var i = 0;
      //     while (locations[i].colors) {
      //       sides[i] = locations[i].id;
      //       i++;
      //     }
      //   }
      //   return sides;
      // }
      // console.log("locations: " + getLocations());

      return obj;
    },
    isEnough() {
      let qty = this.qty;
      let min = this.screenprint.breaks[0];
      let isEnough = false;
      //- if qty is not enough this is false
      if (qty >= min) {
        isEnough = true;
      }
      return isEnough;
    },
    printedSides() {
      let locations = this.locations;
      if (this.isEnough == true) {
        locations = locations.filter(l => l.colors != 0);
      } else {
        locations = "No Colors Selected";
      }
      if (locations.length == 0) {
        locations = "";
      }
      let sides = locations;
      return sides;
    },
    colorArr() {
      let front = this.printedSides.front;
      return front - 1;
    },
    qtyArr() {
      let result = "Not Ready";
      if (this.isEnough == true) {
        let qty = this.qty;
        let priceBreaks = this.screenprint.breaks;
        let value = priceBreaks.find(function(b) {
          return b >= qty;
        });
        result = priceBreaks.indexOf(value);
      }
      return result;
    },
    // - Find Base Price
    printPrice() {
      var matrix = this.screenprint.matrix;
      var isEnough = this.isEnough;
      var base = "Not Ready";
      if (isEnough == true) {
        var base = matrix[this.colorArr][this.qtyArr];
      }
      return {
        base: base,
        location2: "hi"
      };
    },
    newObj() {
      var locations = this.printedSides;
      var i = 0;
      var text = "";
      while (locations[i]) {
        text += locations[i].id;
        i++;
      }
      return text;
    }
  }
};
</script>

<style lang="sass" scoped></style>
