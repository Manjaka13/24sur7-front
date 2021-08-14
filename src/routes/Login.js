import Vue from "vue/dist/vue";
import Login from "@components/Login.vue";
import { getContacts } from "@controller/contacts.js";
import { getEquipement } from "@controller/equipement.js";

Vue.config.productionTip = false;

export default {
	init() {
		console.log("Login mounted.");
		new Vue({
			el: "#app",
			components: {
				login: Login,
			},
			data: {
				contacts: {
					list: {},
					social: [],
				},
				equipement: {
					categories: [],
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
			},
		});
	},
};
