<template lang="pug">
.router-view
	template(v-for="test in tests")
		test(:id="test.id")
		router-link(:to="{path: '/test/'+test.id}" exact) go
</template>

<script>
import test from "@/views/Test";
export default {
  name: "tests",
  //   props: ["id"],
  components: {
    test
  },
  data() {
    return {
      tests: [
        {
          id: 1,
          name: "Foo"
        },
        {
          id: 2,
          name: "Bar"
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>

</style>
