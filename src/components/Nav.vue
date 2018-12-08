<template lang="pug">
nav.navbar(role='navigation', aria-label='main navigation')
	.navbar-brand
		a.navbar-item(href='/')
			img(src='https://bulma.io/images/bulma-logo.png', width='112', height='28')
		a.navbar-burger.burger(role='button', aria-label='menu', aria-expanded='false', data-target='navbarBasicExample')
			span(aria-hidden='true')
			span(aria-hidden='true')
			span(aria-hidden='true')
	#navbarBasicExample.navbar-menu
		.navbar-start
		template(v-for="page in pages")
			router-link(:to="page.path", class="navbar-item", :key="page.name") {{ page.name }}
		.navbar-end
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
          path: "/products/all"
        },
        {
          name: "Quote",
          path: "/quote/"
        }
        //   {
        //     name: "Tests",
        //     path: "/tests/"
        //   }
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
