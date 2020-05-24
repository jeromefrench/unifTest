<template>
	<div>
		<h1>List Actors</h1>
	</div>
</template>

<script>

import {mapGetters} from 'vuex';


	export default{
		computed: mapGetters(["allActors"]),
		created(){
			console.log("bonjour");
			console.log(this.allActors);
		}
	}
</script>

<style scoped>

</style>

