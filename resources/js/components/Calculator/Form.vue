<template>
	<div class="form-wrapper">
		<form>
			<label class="label qty-input" for="test10">Input</label>
			<div class="input">
				<input id="test10" placeholder="Number of Shirts" type="number" v-model="form.qty">
			</div>
			<div class="printed-sides">
				<div class="checkbox">
					<input id="one" name="#" type="checkbox" value>
					<label for="one">Checkbox 1</label>
				</div>
				<div class="checkbox">
					<input id="two" name="#" type="checkbox" value>
					<label for="two">Checkbox 2</label>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {
				qty: 0
			}
		};
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