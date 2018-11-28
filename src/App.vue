<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<template lang="pug">
#app
   router-view 
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // items: [
      //   {
      //     id: "G500",
      //     brand: "Gildan",
      //     title: "Heavy Cotton T-Shirt",
      //     fabric: "100% Cotton",
      //     tbn: require("./assets/img/shirts/G500/g500_tbn.jpg"),
      //     features: [
      //       "6 oz. 100% pre-shrunk cotton; Ash, Sports Grey, Heather, Antique, and Safety colors are poly/cotton blends",
      //       "Ladies option is the Gildan Ultra Cotton Ladies T-shirt",
      //       "Sturdy heavyweight cotton",
      //       "Double-needle stitched for durability",
      //       "Huge color selection"
      //     ],
      //     colors: [
      //       {
      //         name: "Ash",
      //         abr: "ash",
      //         hex: "blue",
      //         path: require("./assets/img/shirts/G500/g500_ash.jpg")
      //       },
      //       {
      //         name: "Black",
      //         abr: "blk",
      //         hex: "red",
      //         path: require("./assets/img/shirts/G500/g500_blk.jpg")
      //       },
      //       {
      //         name: "Light Pink",
      //         abr: "lpnk",
      //         hex: "green",
      //         path: require("./assets/img/shirts/G500/g500_lpnk.jpg")
      //       },
      //       {
      //         name: "Gravel",
      //         abr: "grv",
      //         hex: "grey",
      //         path: require("./assets/img/shirts/G500/g500_grv.jpg")
      //       }
      //     ]
      //   },
      //   {
      //     id: "C3001",
      //     brand: "Bella + Canvas",
      //     title: "Ringspun Cotton T-Shirt",
      //     fabric: "100% Cotton",
      //     tbn: require("./assets/img/shirts/3001c/3001C_tbn.jpg"),
      //     features: [
      //       "6 oz. 100% pre-shrunk cotton; Ash, Sports Grey, Heather, Antique, and Safety colors are poly/cotton blends",
      //       "Ladies option is the Gildan Ultra Cotton Ladies T-shirt",
      //       "Sturdy heavyweight cotton",
      //       "Double-needle stitched for durability",
      //       "Huge color selection"
      //     ],
      //     colors: [
      //       {
      //         name: "Black",
      //         abr: "blk",
      //         hex: "#fff",
      //         path: require("./assets/img/shirts/3001c/3001c_blk.jpg")
      //       },
      //       {
      //         name: "Leaf",
      //         abr: "lef",
      //         hex: "#fff",
      //         path: require("./assets/img/shirts/3001c/3001c_lef.jpg")
      //       },
      //       {
      //         name: "Navy",
      //         abr: "nvy",
      //         hex: "#fff",
      //         path: require("./assets/img/shirts/3001c/3001c_nvy.jpg")
      //       },
      //       {
      //         name: "Red",
      //         abr: "red",
      //         hex: "#fff",
      //         path: require("./assets/img/shirts/3001c/3001c_red.jpg")
      //       }
      //     ]
      //   },
      //   {
      //     id: "980",
      //     brand: "Anvil",
      //     title: "Lightweight T-Shirt",
      //     fabric: "100% Cotton",
      //     tbn: require("./assets/img/shirts/980/980_tbn.jpg"),
      //     features: [
      //       "6 oz. 100% pre-shrunk cotton; Ash, Sports Grey, Heather, Antique, and Safety colors are poly/cotton blends",
      //       "Ladies option is the Gildan Ultra Cotton Ladies T-shirt",
      //       "Sturdy heavyweight cotton",
      //       "Double-needle stitched for durability",
      //       "Huge color selection"
      //     ],
      //     colors: [
      //       {
      //         name: "Black",
      //         abr: "blk",
      //         hex: "#fff",
      //         path: require("./assets/img/shirts/3001c/3001c_blk.jpg")
      //       },
      //       {
      //         name: "Leaf",
      //         abr: "lef",
      //         hex: "#fff",
      //         path: require("./assets/img/shirts/3001c/3001c_lef.jpg")
      //       },
      //       {
      //         name: "Navy",
      //         abr: "nvy",
      //         hex: "#fff",
      //         path: require("./assets/img/shirts/3001c/3001c_nvy.jpg")
      //       },
      //       {
      //         name: "Red",
      //         abr: "red",
      //         hex: "#fff",
      //         path: require("./assets/img/shirts/3001c/3001c_red.jpg")
      //       }
      //     ]
      //   }
      // ]
    };
  }
};
</script>

<style lang="sass" scoped>

</style>
