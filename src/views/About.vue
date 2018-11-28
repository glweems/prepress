<template lang="pug">
.about
	p.title This is the about page
	p.info This is a t-shirt pricing calulator
		
</template>

<script>
import Items from "@/App";
export default {
  name: "About",
  props: ["products"],
  data() {
    return {
      Items: {}
    };
  }
};
</script>

<style lang="sass" scoped>

</style>
