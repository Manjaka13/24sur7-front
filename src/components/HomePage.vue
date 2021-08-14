<template>
	<div class="home-page">
		<Navbar :equipementcategories="equipementcategories" />
		<Offers />
		<Newsletter />
		<Contacts :contactslist="contactslist" :sociallist="sociallist" />
		<Copyright />
	</div>
</template>

<script>
import Navbar from "@components/Navbar.vue";
import Newsletter from "@components/Newsletter.vue";
import Contacts from "@components/Contacts.vue";
import Copyright from "@components/Copyright.vue";
import Offers from "@components/Offers.vue";

export default {
	name: "HomePage",
	components: {
		Navbar,
		Newsletter,
		Contacts,
		Copyright,
		Offers,
	},
	props: {
		contactslist: {
			type: Object,
			default: () => {},
		},
		sociallist: {
			type: Array,
			default: () => [],
		},
		equipementcategories: {
			type: Array,
			default: () => [],
		},
	},
};
</script>
