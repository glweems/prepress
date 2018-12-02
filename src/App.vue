<template lang="pug">
#app.container
	Nav 
	router-view
</template>

<script>
import Nav from "@/components/Nav";
export default {
  name: "App",
  components: {
    Nav
  },
  data() {
    return {};
  }
};
</script>

<style lang="sass">
@import "../public/main.sass"

html
	background: $light
	
#app
	text-align: center
</style>
