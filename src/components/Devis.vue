<template>
	<div class="devis">
		<Navbar :equipementcategories="equipementcategories" />
		<div class="devis__content">
			<div class="devis__box">
				<h1 class="title-3 devis__title">Faire une simulation</h1>
				<form class="devis__form">
					<div class="devis__input">
						<div class="label">
							<p class="text"><Icon class="icon" icon="coins" /> Prix sur internet</p>
						</div>
						<input
							class="input"
							type="number"
							min="0"
							placeholder="Entrer le prix du produit"
							required
						/>
						<p class="text--light unit">Euro</p>
					</div>
					<div class="devis__input">
						<div class="label">
							<p class="text"><Icon class="icon" icon="balance-scale" /> Poids</p>
						</div>
						<input
							class="input"
							type="number"
							min="0"
							placeholder="Quel est le poids du produit"
							required
						/>
						<p class="text--light unit">Kg</p>
					</div>
					<div class="devis__input">
						<div class="label">
							<p class="text"><Icon class="icon" icon="globe" /> Pays de départ</p>
						</div>
						<select class="input" v-model="formCountry">
							<option
								v-for="(country, key) in countryname"
								:key="key"
								:value="country.name"
							>
								{{ country.name }}
							</option>
						</select>
					</div>
					<button class="button" type="submit">Valider</button>
				</form>
			</div>
		</div>
		<Newsletter />
		<Contacts :contactslist="contactslist" :sociallist="sociallist" />
		<Copyright />
	</div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faCoins,
	faBalanceScale,
	faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "@components/Navbar.vue";
import Newsletter from "@components/Newsletter.vue";
import Contacts from "@components/Contacts.vue";
import Copyright from "@components/Copyright.vue";

library.add(faCoins, faBalanceScale, faGlobe);

export default {
	name: "Devis",
	components: {
		Navbar,
		Newsletter,
		Contacts,
		Copyright,
		Icon: FontAwesomeIcon,
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
		countryname: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			formCountry: "France",
		};
	},
};
</script>
