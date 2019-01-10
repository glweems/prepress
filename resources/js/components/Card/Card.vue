<template>
	<div class="card">
		<!-- Card Header -->
		<div v-if="header" class="header">
			<card-header v-if="header" :header="header"></card-header>
		</div>
		<!-- Card Inner -->
		<div :class="cardInner()">
			<!-- Card Image -->
			<card-image v-if="img" :img="img"></card-image>
			<!-- Card Body -->
			<div class="body">
				<h4 v-if="title" class="title">{{ title }}</h4>
				<h4 v-if="subtitle" class="title">{{ subtitle }}</h4>
				<card-text v-if="msg" :text="msg"></card-text>
			</div>
		</div>
	</div>
</template>

<script>
import header from "%/Card/Header";
import image from "Basic/Image";
import paragraph from "Basic/P";
export default {
	props: {
		header: String,
		title: String,
		subtitle: String,
		msg: String,
		img: String
	},
	components: {
		"card-header": header,
		"card-image": image,
		"card-text": paragraph
	},
	methods: {
		cardInner() {
			let classes = ["card-inner"];
			if (this.img) {
				classes.push("card-has-img");
			}
			return classes;
		}
	}
};
</script>

<style lang="scss" scoped>
	@import "sassy";
	.card {
		@include shadow;
	}
	.card-inner {
		background: green;
	}
	.card-has-img {
		display: grid;
		grid-template-columns: 2fr 5fr;
		margin: 0.35em;
		gap: 0.75em;
		margin: 1em;
		padding: 0.5em 0.35em;
	}
</style>