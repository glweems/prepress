<template>
	<div :class="classes()">
		<gw-nav :items="pages" nav-style="dark" :color="color"></gw-nav>
	</div>
</template>

<script>
import nav from "%/Nav/Nav";
export default {
	props: {
		pages: {
			type: Array,
			required: true
		},
		bg: {
			type: String,
			default: "primary"
		},
		color: {
			type: String,
			default: "light"
		}
	},
	components: { "gw-nav": nav },
	data() {
		return {};
	},
	methods: {
		classes() {
			let array = [];
			array.push(this.bg, this.color);
			console.log(array);
			return array;
		}
	}
};
</script>

<style lang="scss" scoped>
	@import "sassy";
	.navbar-component {
		display: flex;
	}
	.primary {
		background: $primary;
	}
	.dark {
		background: $dark;
	}
</style>