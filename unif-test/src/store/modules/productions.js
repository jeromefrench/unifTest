
const state = {
	productions: []
};

const getters = {
	allProductions: (state) => state.productions
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
