<template>
	<div>
		<h1 class="title">List Productions</h1>
		<b-table :data="table" :columns="columns"></b-table>
	</div>
</template>

<script>

import {mapGetters} from 'vuex';

export default{
	name: "ListProductions",
	computed: mapGetters(["allProductions"]),
	data: function(){
		return {
			table: [],
			columns: [
				{
					field: 'title',
					label: 'Title',
				},
				{
					field: 'synopsis',
					label: 'Synopsis',
				},
				{
					field: 'casting',
					label: 'Casting',
				},
				{
					field: 'budget',
					label: 'Budget',
				}
			]
		}
	},
	mounted(){
		console.log("mounted");
		console.log(this.allProductions);
		this.allProductions.forEach(val => {
			console.log("val");
			console.log(val);
			let indice = {};
			indice.title = val.title;
			indice.synopsis = val.synopsis;
			indice.casting = val.casting.join(", ");
			indice.budget = val.budget;
			this.table.push(indice);
		});
		console.log("table");
		console.log(this.table);
	}
}
</script>

<style scoped>

</style>

