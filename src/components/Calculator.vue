<template lang="pug">
.container 

	//- Product
	//- template(v-if="route('quoteId')")
	template
		Product(:items="this.$props.items", :key="item.id")

		//- Calculator
	.card
		header.card-header
			p.card-header-title Options
			a.card-header-icon(href='#', aria-label='more options')
				span.icon
					i.fas.fa-angle-down(aria-hidden='true')
		.card-content
			.step.qty
				.content
					p.subtitle Total Quantity
					el-input-number(v-model='qty', @change='inputQty(qty)', :min='0', :max='1000')
					template(v-if="qty < 12")
						p.help.is-danger Minimum QTY 12
				template(v-if="isEnough()")
					.content
						p.subtitle Print Locations
						template(v-for="location in locations")
							label.label {{ location.id }}
							el-input-number(v-model='location.colors', :min='0', :max='4')
							

							//- input.input(v-model="qty", type='text', pattern="[0-9]*")
					//- 		hr
					//- .step.locations
					//- 	//- Pick Locations & Number of Colors
					//- 	strong Number of sides being printed
					//- 	hr
					//- 	.colors
					//- 		div
					//- 			p.subtitle.is-6 {{locations[0].id}}
					//- 			el-checkbox
							//- template(v-if="showBack()")
							//- 	div
							//- 		p.subtitle.is-6 {{locations[1].id}}
							//- 		v-select(v-model="locations[1].colors", :options="screenprint.colors")
	//- .wrapper
	//- 	article.message.is-success
	//- 		.message-header
	//- 			p Your Price Is!
	//- 			button.delete(aria-label='delete')
	//- 		.message-body
	//- 			p.title {{ price.per }}

	</template>

<script>
import List from "@/views/Product/List";
import Product from "@/views/Product/Product";
export default {
  name: "Calculator",
  props: ["items"],
  components: {
    List,
    Product
  },
  data() {
    return {
      id: this.$route.params.id,
      colorAbr: this.$route.query.color,
      qty: 12,
      locations: [
        {
          id: "Front",
          colors: null
        },
        { id: "Back", colors: null }
      ],
      progress: {
        steps: [1, 2, 3, 4, 5, 6]
      },
      screenprint: {
        colors: [1, 2, 3, 4],
        breaks: [12, 24, 36, 100],
        matrix: [
          [10, 9, 8, 7],
          [10.75, 9.5, 8.25, 7.25],
          [11.5, 10.75, 9, 7.5],
          [14.25, 12.5, 9.5, 8]
        ],
        location2: [1.25, 1.5, 1.75, 2]
      }
    };
  },
  methods: {
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
    inputQty(value) {
      var message = "Qty: " + value;
      console.log(message);
    },
    pickColors() {
      if (isEnough() === true) {
      }
    },
    showBack() {
      if (this.locations[0].colors > 0) {
        return true;
      }
    },
    route() {
      return this.$route.name;
    }
  },
  computed: {
    //  isEnough() {
    //    let qty = this.qty;
    //    let min = this.screenprint.breaks[0];
    //    let isEnough = false;
    //    //- if qty is not enough this is false
    //    if (qty >= min) {
    //      isEnough = true;
    //    }
    //    return isEnough;
    //  },
    item() {
      var id = this.id;
      var item = this.items.find(item => item.id == id);
      return item;
    },
    qtyArr() {
      let result = null;
      if (this.isEnough == true) {
        let qty = this.qty;
        let breaks = this.screenprint.breaks;
        let value = breaks.find(function(b) {
          return b >= qty;
        });
        result = breaks.indexOf(value);
      }
      return result;
    },
    sides() {
      var arr = [];
      let front = null;
      let back = null;
      if (this.locations[0].colors != null) {
        front = this.locations[0];
      }
      if (this.locations[1].colors != null) {
        back = this.locations[1];
      }
      arr[0] = front;
      arr[1] = back;
      return arr;
    },
    job() {
      var qtyArr = this.qtyArr;
      var matrix = this.screenprint.matrix;
      var location2 = this.screenprint.location2;
      var isEnough = this.isEnough;
      if (isEnough == true) {
        var base = matrix[this.sides[0].colors - 1][this.qtyArr];
        if (this.sides[1]) {
          var back = location2[this.sides[1].colors - 1];
        }
      }
      return {
        base: base,
        back: back,
        upgrade: this.item.upgrade
        //   location2: back
      };
    },
    price() {
      var obj = {};
      var base = this.job.base;
      let back = this.job.back;
      var upgrade = this.job.upgrade;
      let total = "base + back + upgrade;";

      if (back === undefined) {
        total = base + upgrade;
      } else {
        total = base + back + upgrade;
      }

      obj.per = "$" + total;

      return obj;
    }
  }
};
</script>

<style lang="sass" scoped>
.wrapper
	margin: 1em
	text-align: center

.colors
	display: grid
	grid-template-columns: 1fr 1fr
	.subtitle
		padding: none
		margin: none
</style>
