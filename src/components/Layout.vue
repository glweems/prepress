<template lang="pug">
.layout
  //- Nav
  router-view 
</template>

<script>
import Nav from "@/components/Nav";
export default {
	name: "Layout",
	props: [""],
	components: {
		Nav
	},
	data() {
		return {};
	}
};
</script>

<style lang="sass" scoped>
.layout
  padding: 1em
  margin: 1em
</style>
