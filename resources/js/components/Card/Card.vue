<template>
	<div class="card">
		<!-- Card Header -->
		<div v-if="header" class="header">
			<card-header v-if="header" :header="header"></card-header>
		</div>
		<!-- Card Inner -->
		<div :class="cardInner()">
			<!-- Card Image -->
			<card-image v-if="img" class="border rounded-corners" :img="img"></card-image>
			<!-- Card Body -->
			<div class="body">
				<h4 v-if="title" class="card-title">{{ title }}</h4>
				<h4 v-if="subtitle" class="title">{{ subtitle }}</h4>
				<card-text v-if="msg" :text="msg"></card-text>
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
	// @import "sassy";
	.card {
		// @include margin;
		// @include corners;
	}
	.card-inner {
		// background: green;
	}
	.card-has-img {
		// display: grid;
		// grid-template-columns: 2fr 5fr;
		// gap: 0.75em;
		// padding: 0.5em 0.35em;
	}
</style>