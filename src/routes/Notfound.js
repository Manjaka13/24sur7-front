import Vue from "vue/dist/vue";
import Notfound from "@components/Notfound.vue";

Vue.config.productionTip = false;

export default {
	init() {
		console.log("404 mounted.");
		new Vue({
			el: "#app",
			components: {
				notfound: Notfound,
			},
		});
	},
};
