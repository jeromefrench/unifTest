
let seed = require('./seed.js')



const state = {
	productions: seed
};

const getters = {
	allProductions: (state) => state.productions,
	allActors: (state) => {
		let actorsList = [];
		state.productions.forEach(production => {
			actorsList.push(...production.casting);
		})
		let unique = [...new Set(actorsList)];
		return unique;
	},
};

const actions = {
	async addProduction({commit}, production){
		console.log("On add");
		commit('addProduction', production);
	}
};

const mutations = {
	addProduction: (state, production) => state.productions.unshift(production)
};

export default {
	state,
	getters,
	actions,
	mutations
};
