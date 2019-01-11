<template>
	<button class="button" @click="onClick(sku)">
		<slot></slot>
	</button>
</template>

<script>
export default {
	props: {
		onClick: {
			type: Function,
			required: true
		}
	}
};
</script>

<style lang="scss" scoped>
	@import "sassy";
</style>