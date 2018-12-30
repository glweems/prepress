<template lang="pug">
.pricing-table
	el-table(:data='tableData', style='width: 100%')
		el-table-column(prop='date', label='Date', width='180')
		el-table-column(prop='name', label='Name', width='180')
		el-table-column(prop='address', label='Address')
</template>
	
<script>
export default {
	name: "PricingTable",
	props: [""],
	components: {},
	data() {
		return {
			tableData: [
				{
					date: "2016-05-03",
					name: "Tom",
					address: "No. 189, Grove St, Los Angeles"
				},
				{
					date: "2016-05-02",
					name: "Tom",
					address: "No. 189, Grove St, Los Angeles"
				},
				{
					date: "2016-05-04",
					name: "Tom",
					address: "No. 189, Grove St, Los Angeles"
				},
				{
					date: "2016-05-01",
					name: "Tom",
					address: "No. 189, Grove St, Los Angeles"
				}
			]
		};
	},
	methods: {
		qty(x, y) {
			return x + "-" + y;
		}
	},
	computed: {}
};
</script>
	
<style lang="sass" scoped>
@import '@/sass/main.sass'

.pricing-table
    
</style>