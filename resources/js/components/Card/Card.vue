<template>
	<div class="card">
		<div class="card-inner">
			<div v-if="header" class="header">
				<h4>{{ header }}</h4>
			</div>
			<div class="body">
				<div v-if="img" class="card-img">
					<card-image :img="img"></card-image>
				</div>
				<h4 v-if="title" class="title">{{ title }}</h4>
				<h4 v-if="subtitle" class="title">{{ subtitle }}</h4>
				<p v-if="msg" class="msg">{{ msg }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import image from "%/Image";
export default {
	props: {
		header: String,
		title: String,
		subtitle: String,
		msg: String,
		img: String
	},
	components: {
		"card-image": image
	},
	data() {
		return {
			type: {
				img: {
					style: {}
				}
			}
		};
	}
};
</script>

<style lang="scss" scoped>
	.card {
		-webkit-box-flex: 1;
		-webkit-box-orient: vertical;
		background-color: #fff;
		border: 1px solid #dfe1e5;
		border-radius: 8px;
		box-shadow: none;
		display: block;
		display: flex;
		flex: 1 0 auto;
		flex-basis: auto;
		flex-direction: column;
		flex-grow: 1;
		flex-shrink: 0;
		overflow: hidden;
		padding: 16px;
	}
</style>