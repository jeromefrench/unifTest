<template>
	<div>
		<h1 class="title">List Actors</h1>
		<ul class="list is-hoverable">
			<li v-for="actor in allActors" class="list-item">{{actor}}</li>
		</ul>
	</div>
</template>

<script>

import {mapGetters} from 'vuex';


export default{
	computed: mapGetters(["allActors"]),
	created(){
		console.log(this.allActors);
	}
}
</script>

<style scoped>

</style>

