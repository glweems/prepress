<template lang="pug">
div
	Nav
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

<style lang="sass" scoped></style>
