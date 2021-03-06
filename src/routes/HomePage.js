import Vue from "vue/dist/vue";
import HomePage from "@components/HomePage.vue";
import { getContacts } from "@controller/contacts.js";
import { getEquipement } from "@controller/equipement.js";
import { getPricing } from "@controller/pricing.js";

Vue.config.productionTip = false;

export default {
	init() {
		console.log("HomePage mounted.");
		new Vue({
			el: "#app",
			components: {
				homepage: HomePage,
			},
			data: {
				scrollPosition: 0,
				contacts: {
					list: {},
					social: [],
				},
				equipement: {
					categories: [],
				},
				pricing: {},
			},
			created() {
				this.handleScroll();
				window.addEventListener("scroll", this.handleScroll);
			},
			mounted() {
				this.getContacts("contactsList").then((data) => {
					this.contacts.list = data;
				});
				this.getContacts("social").then((data) => {
					this.contacts.social = data;
				});
				this.getEquipement("categories").then((data) => {
					this.equipement.categories = data;
				});
				this.getPricing("pricing").then((data) => {
					this.pricing = data;
				});
			},
			destroyed() {
				window.removeEventListener("scroll", this.handleScroll);
			},
			methods: {
				handleScroll() {
					this.scrollPosition = window.scrollY;
				},
				getContacts(type) {
					return getContacts()(type)
						.then(({ data }) => data)
						.catch((e) => console.error(e));
				},
				getEquipement(type) {
					return getEquipement()(type)
						.then(({ data }) => data)
						.catch((e) => console.error(e));
				},
				getPricing(type) {
					return getPricing()(type)
						.then(({ data }) => data)
						.catch((e) => console.error(e));
				},
			},
		});
	},
};
