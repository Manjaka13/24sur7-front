import Vue from "vue/dist/vue";
import Devis from "@components/Devis.vue";
import { getContacts } from "@controller/contacts.js";
import { getEquipement } from "@controller/equipement.js";
import { getCountry } from "@controller/country.js";

Vue.config.productionTip = false;

export default {
	init() {
		console.log("Devis mounted.");
		new Vue({
			el: "#app",
			components: {
				devis: Devis,
			},
			data: {
				contacts: {
					list: {},
					social: [],
				},
				equipement: {
					categories: [],
				},
				country: {
					name: [],
				},
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
				this.getCountry("countryName").then((data) => {
					this.country.name = data;
				});
			},
			methods: {
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
				getCountry(type) {
					return getCountry()(type)
						.then(({ data }) => data)
						.catch((e) => console.error(e));
				},
			},
		});
	},
};
