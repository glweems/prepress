<template>
	<div class="filters">
		<div class="bar scroll">
			<button
				v-for="filter in filters"
				@click="toggle(filter)"
				class="bar-item scroll-item"
				:key="filter.label"
			>{{ filter.label }}</button>
			<button v-if="drawer!=null" class="bar-item scroll-item" @click="toggle(null)">Clear</button>
			<!-- Drawer -->
			<div v-if="drawer" class="drawer">
				<!-- <p class="active-label">{{ active.label }}</p> -->
				<div class="active-filters scroll">
					<button
						@click="addFilter(item)"
						v-for="item in drawer.items"
						class="scroll-item drawer-item"
						:key="item"
					>{{ item }}</button>
				</div>
			</div>
		</div>
		<h1 v-if="active">{{ active }}</h1>
	</div>
</template>

<script>
export default {
	props: { filters: { type: Array, required: true } },
	components: {
		"bar-button": () =>
			import(/* webpackChunkName: "filter-item" */ "Elements/Button")
	},
	data() {
		return { drawer: null, active: null };
	},
	methods: {
		toggle(data) {
			this.drawer = data;
			this.active = null;
		},
		addFilter(filter) {
			console.log(filter);
			this.active = filter;
		}
	}
};
</script>

<style lang="scss" scoped>
	@import "sassy";
	.filters {
		width: 100%;
		margin-bottom: 1em;
	}
	button {
		color: $alt;
		background: none;
		border: none;
	}
	.bar {
		width: 100%;
		background: $light-dark;
	}
	.bar-item {
		display: flex;
		align-items: center;
		font-size: 16px;
		height: 100%;
		padding: 0.25em;
		background: $alt-lighter;
		.label {
			margin: 0.1em;
			padding: 0.25em 1em;
			background: white;
		}
	}
	.drawer {
		margin: 0.1em;
		margin-left: 1em;
	}
	.drawer-item {
		padding: 0.25em 1em;
	}
</style>


