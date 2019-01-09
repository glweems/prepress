<template>
	<div class="card">
		<div v-if="header" class="header">
			<h4>{{ header }}</h4>
		</div>
		<div class="body">
			<h4 v-if="title" class="title">{{ title }}</h4>
			<h4 v-if="subtitle" class="title">{{ subtitle }}</h4>
			<p v-if="msg" class="msg">{{ msg }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		header: String,
		title: String,
		subtitle: String,
		msg: String
	}
};
</script>

<style scoped>
</style>