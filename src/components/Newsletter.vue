<template>
	<div class="newsletter">
		<div class="container">
			<div class="separator"></div>
			<div class="newsletter__box">
				<div class="newsletter__left">
					<h2 class="title-5 title">Newsletter</h2>
					<p class="text">
						Souscrivez à notre newsletter pour recevoir les dernières informations sur
						nos services.
					</p>
				</div>
				<form class="newsletter__right">
					<input
						type="email"
						class="input"
						placeholder="Votre adresse e-mail"
						required
					/>
					<button type="submit" class="button">
						<Icon class="icon" icon="envelope" /> Souscrire
					</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { baseUrl } from "@scripts/const.js";

library.add(faEnvelope);

export default {
	name: "SearchBar",
	components: {
		Icon: FontAwesomeIcon,
	},
	mounted() {
		console.log("Base url: ", baseUrl);
	},
};
</script>
