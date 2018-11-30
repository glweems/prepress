<template lang="pug">
#app.container
	router-view
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    };
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
