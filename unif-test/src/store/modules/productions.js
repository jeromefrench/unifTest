
const state = {
	productions: [
		{
			title: "Le roi lion",
			synopsis: "Au fond de la savane africaine, tous les animaux célèbrent la naissance de Simba, leur futur roi. Les mois passent. Simba idolâtre son père, le roi Mufasa, qui prend à cœur de lui faire comprendre les enjeux de sa royale destinée. Mais tout le monde ne semble pas de cet avis. Scar, le frère de Mufasa, l'ancien héritier du trône, a ses propres plans. La bataille pour la prise de contrôle de la Terre des Lions est ravagée par la trahison, la tragédie et le drame, ce qui finit par entraîner l'exil de Simba. Avec l'aide de deux nouveaux amis, Timon et Pumbaa, le jeune lion va devoir trouver comment grandir et reprendre ce qui lui revient de droit…",
			casting: ["John Olivier", "Eric Andre", "Amy Sedaris", "Chance The Rapper"],
			budget: "32348943"
		},
		{
			title: "Harry Potter",
			synopsis: "L'étau démoniaque de Voldemort se resserre sur l'univers des Moldus et le monde de la sorcellerie. Poudlard a cessé d'être un havre de paix, le danger rode au coeur du château... Mais Dumbledore est plus décidé que jamais à préparer Harry à son combat final, désormais imminent. Ensemble, le vieux maître et le jeune sorcier vont tenter de percer à jour les défenses de Voldemort. Pour les aider dans cette délicate entreprise, Dumbledore va relancer et manipuler son ancien collègue, le Professeur Horace Slughorn, qu'il croit en possession d'informations vitales sur le jeune Voldemort. Mais un autre mal hante cette année les étudiants : le démon de l'adolescence ! Harry est de plus en plus attiré par Ginny, qui ne laisse pas indifférent son rival, Dean Thomas ; Lavande Brown a jeté son dévolu sur Ron, mais oublié le pouvoir magique des chocolats de Romilda Vane ; Hermione, rongée par la jalousie, a décidé de cacher ses sentiments, vaille que vaille. L'amour est dans tous les coeurs - sauf un. Car un étudiant reste étrangement sourd à son appel. Dans l'ombre, il poursuit avec acharnement un but aussi mystérieux qu'inquiétant... jusqu'à l'inévitable tragédie qui bouleversera à jamais Poudlard... ",
			casting: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson", "Bonnie Wright"],
			budget: "32999943"
		}
	]
};

const getters = {
	allProductions: (state) => state.productions,
	allActors: (state) => {
		let actorsList = [];
		console.log(state.productions);
		state.productions.forEach(production => {
			actorsList.push(...production.casting);
		})
		return actorsList;
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
