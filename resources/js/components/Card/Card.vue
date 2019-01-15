<template>
	<div class="card">
		<!-- Card Header -->
		<div v-if="header" class="header"></div>
		<p class="header-text">{{ header }}</p>
		<!-- Card Inner -->
		<div :class="cardInner()">
			<!-- Card Image -->
			<div v-if="img" class="img-wrapper">
				<img class :src="img">
			</div>
			<!-- Card Body -->
			<div class="body">
				<p>{{ title }}</p>
				<p v-if="title" class="card-title">{{ title }}</p>
				<p v-if="subtitle" class="title">{{ subtitle }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import header from "%/Card/Header";
import image from "Elements/Img";
import p from "Elements/P";
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
		"card-text": p
	},
	methods: {
		buttonClick() {
			console.log("Button Clicked");
		},
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
	p {
		margin: 0 !important;
		padding: 0 !important;
	}

	.card {
		.header {
		}
		.header-text {
			margin-left: 1em !important;
			background: $light;
		}
	}
	.card-inner {
		display: flex;
		align-items: center;
		.img-wrapper {
			max-width: 25% !important;
			// height: 100%;
		}
	}
	.card-has-img {
		// display: grid;
		// grid-template-columns: 2fr 5fr;
		// gap: 0.75em;
		// padding: 0.5em 0.35em;
	}
</style>