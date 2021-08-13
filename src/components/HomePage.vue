<template>
	<div class="home-page">
		<Navbar />
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

export default {
	name: "HomePage",
	components: {
		Navbar,
		Newsletter,
		Contacts,
		Copyright,
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
	},
};
</script>
