 <template>
	<nav class="scroll">
		<nav-item
			v-for="(item, index) in items"
			:text="item.title"
			:path="item.path"
			:key="index"
			:color="color"
		></nav-item>
	</nav>
</template>

<script>
export default {
	props: {
		items: {
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
	components: {
		"nav-item": () =>
			import(/* webpackChunkName: "nav-item" */ "%/Nav/NavItem")
	}
};
</script>

<style lang="scss" scoped>
	@import "sassy";
	.scroll {
		display: flex;
		flex-wrap: nowrap;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
		-ms-overflow-style: -ms-autohiding-scrollbar;
	}

	.scroll::-webkit-scrollbar {
		display: none;
	}
	a {
		flex: 0 0 auto;
	}
</style>