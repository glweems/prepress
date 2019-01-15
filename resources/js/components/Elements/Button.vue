<template>
	<button class="button" @click="pressed">
		<slot></slot>
	</button>
</template>

<script>
export default {
	props: {
		pressed: {
			type: Function,
			required: true
		}
	}
};
</script>

<style lang="scss" scoped>
</style>