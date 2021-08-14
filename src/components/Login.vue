<template>
	<div class="login">
		<Navbar :equipementcategories="equipementcategories" />
		<Loginbox />
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
import Loginbox from "@components/Loginbox.vue";

export default {
	name: "Login",
	components: {
		Navbar,
		Newsletter,
		Contacts,
		Copyright,
		Loginbox,
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
