<template lang="pug">
#nav
   ul(v-for="page in pages")
      li 
         router-link(:to="page.path", :key="page.name") {{ page.name }}
</template>

<script>
export default {
  name: "Nav",
  props: [" "],
  data() {
    return {
      pages: [
        {
          name: "Home",
          path: "/"
        },
        {
          name: "About",
          path: "/about"
        },
        {
          name: "Products",
          path: "/products"
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
ul
   display: inline-block
   li
      padding: 1em 1em
#nav
   font-family: 'Avenir', Helvetica, Arial, sans-serif
   -webkit-font-smoothing: antialiased
   -moz-osx-font-smoothing: grayscale
   text-align: center
   color: #2c3e50
   a 
      font-weight: bold
      color: #2c3e50
      &.router-link-exact-active 
         color: #42b983
</style>
