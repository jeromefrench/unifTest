<template>
	<div id="app">
		<div id="nav" >
			<router-link to="/">Home</router-link> |
			<router-link to="/list-productions">List Productions</router-link> |
			<router-link to="/launch-production">Launch Production</router-link> |
			<router-link to="/list-actors">List Actors</router-link>
		</div>


		<div class="columns">
			<div class="column gutter"></div>
			<div class="column is-three-quarters">
				<router-view/>
			</div>
			<div class="column gutter"></div>
		</div>



	</div>
</template>

<style>

.gutter {
	background-color: hsl(0, 0%, 96%);
	height: 100vh;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
	background-color: hsl(0, 0%, 96%);
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
