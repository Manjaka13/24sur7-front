import Vue from "vue/dist/vue";
// import HomePage from "@components/HomePage.vue";

Vue.config.productionTip = false;

export default {
	init() {
		console.log("Devis mounted.");
		new Vue({
			el: "#app",
			/* components: {
				"home-page": HomePage,
			}, */
		});
	},
};
