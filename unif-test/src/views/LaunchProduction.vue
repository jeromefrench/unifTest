<template>
	<div>
		<h1 class="title">Launch Production</h1>

		<div class="card">
			<div class="card-content">
				<b-field label="Movie title">
					<b-input
						type="text"
						v-model="title"
						required
						></b-input>
				</b-field>

				<b-field label="Synopsis">
					<textarea class="textarea" v-model="synopsis"></textarea>
				</b-field>

				<b-field label="Budget">
					<b-input
						type="number"
						v-model="budget"
						min="0"
						required
						> </b-input>
				</b-field>

				<b-field label="Casting">
					<div>
						<div v-for="actor in casting" :key="actor">
							{{actor}}
							<label class="checkbox">
								<input
									type="checkbox"
									:value="actor"
									@click="delActor"
									checked="checked"
									>
							</label>
						</div>
						<div id="add">
							<b-input
								v-model="actor"
								required
								type="text"
								style="display: inline-block; "
								>
							</b-input>
								<b-button
									@click="addActor"
									style="display: inline-block"
									>
									Add actor
								</b-button>
						</div>
					</div>
				</b-field>
			</div>
			<footer class="card-footer">
				<p class="card-footer-item register">
				<b-button @click="submit">Add Production</b-button>
				</p>
			</footer>
		</div>

	</div>
</template>

<script>

export default{
	name: "LaunchProduction",
	data: function() {
		return {
			title: '',
			synopsis: '',
			budget: '',
			casting: [],
			actor: ''
		}
	},
	methods: {
		submit(){
			let film = {};
			film.titre = this.titre;
			film.synopsis = this.synopsis;
			film.budget = this.budget;
			film.casting = this.casting;
			this.addFilm(film);
		},
		addFilm(film){
			//on envoi sur le store
			this.$buefy.toast.open({
				message: 'Production added!',
				type: 'is-success'
			})
		},
		addActor(){
			this.casting.push(this.actor);
			this.actor = "";
		},
		delActor(e){
			console.log(e.target);
			console.log(e.target.value);
			this.casting = this.casting.filter(val => val !== e.target.value);
			console.log(this.casting);
		}
	}
}
</script>

<style scoped>
.card-footer {
	border: none;
}

#add{
	margin-top: 8px;
	margin: 0px;
	padding: 0px;
	width: 100%;
}

.card {
	width: 70%;
	margin: 0 auto;
}

.card-content {
	width: 80%;
	margin: 0 auto;
}

</style>

