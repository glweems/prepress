<template>
	<div class="form-wrapper">
		<!-- <div class="form-info">
			<p>QTY: {{ qty }}</p>
			<p>Front Colors: {{ locations[0].colors }}</p>
			<p>Back Colors: {{ locations[1].colors }}</p>
		</div>-->
		<form>
			<label class="label qty-input" for="test10">Input</label>
			<div class="input">
				<input id="test10" placeholder="Number of Shirts" type="number" v-model="qty">
			</div>
			<!-- Checkboxes -->
			<p>printed sides</p>
			<div v-if="qty != 0" class="printed-sides">
				<!-- Front Checkbox -->
				<div class="checkbox">
					<input id="one" :name="locations[0].name" type="checkbox" v-model="locations[0].checked">
					<label for="one">{{ locations[0].title }}</label>
				</div>
				<!-- Back Checkbox -->
				<div class="checkbox">
					<input id="two" name="#" type="checkbox" v-model="locations[1].checked">
					<label for="two">{{ locations[1].title }}</label>
				</div>
			</div>

			<!-- Color Dropdowns -->
			<div class="colors-dropdowns">
				<!-- Front Colors -->
				<div class="dropdown" v-if="locations[0].checked">
					<label class="label" :for="locations[0].name">{{ locations[0].title }}</label>

					<div class="select select-fullWidth">
						<select v-model="locations[0].colors">
							<option disabled>0</option>
							<option v-for="color in screenprint.colors" :key="color" :value="color">{{ color }}</option>
						</select>
					</div>
				</div>

				<!-- Back Colors -->
				<div class="dropdown" v-if="locations[1].checked">
					<label class="label" :for="locations[1].name">{{ locations[1].title }}</label>

					<div class="select select-fullWidth">
						<select v-model="locations[1].colors">
							<option disabled>0</option>
							<option v-for="color in screenprint.colors" :key="color" :value="color">{{ color }}</option>
						</select>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			qty: 0,
			locations: [
				{
					title: "Front",
					name: "front-checkbox",
					checked: false,
					colors: 0
				},
				{
					title: "Back",
					name: "back-checkbox",
					checked: false,
					colors: 0
				}
			],
			form: {
				viewQuote: false,
				hasSizes: false,
				qty: 0,
				checkedSides: {
					front: false,
					back: false
				},
				sizes: [
					{
						id: "S",
						title: "Small",
						qty: 0
					},
					{
						id: "M",
						title: "Medium",
						qty: 0
					},
					{
						id: "L",
						title: "Large",
						qty: 0
					},
					{
						id: "XL",
						title: "Extra Large",
						qty: 0
					},
					{
						id: "2XL",
						title: "Double Extra Large",
						qty: 0
					}
				],
				locations: [
					{
						id: "Front",
						colors: 0
					},
					{
						id: "Back",
						colors: 0
					}
				]
			},
			screenprint: {
				colors: [1, 2, 3, 4],
				breaks: [12, 24, 36, 100],
				matrix: [
					[10, 9, 8, 7],
					[10.75, 9.5, 8.25, 7.25],
					[11.5, 10.75, 9, 7.5],
					[14.25, 12.5, 9.5, 8]
				],
				secondLocation: [1.25, 1.5, 1.75, 2]
			}
		};
	},
	methods: {
		setLocationColor(location) {}
	}
};
</script>

<style lang="scss" scoped>
	form {
		padding: 0 1.2em 0 1.5em;
	}
	.printed-sides {
		display: flex;
		align-items: center;
		// justify-content: center;
		div {
			margin-right: 2em;
		}
	}

	.qty-input {
		width: 80% !important;
	}
</style>