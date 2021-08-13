<template>
	<div class="contacts">
		<div class="container">
			<div class="separator"></div>
			<div class="contacts__box">
				<div class="contacts__left">
					<h2 class="title title-5">Nous contacter</h2>
					<ul class="contacts__list">
						<li class="text contacts__item">Nous sommes disponibles 24/7.</li>
						<li class="text contacts__item bold phone">{{ contactslist.phone }}</li>
						<li class="text contacts__item">{{ contactslist.adress }}</li>
						<li class="text contacts__item">{{ contactslist.mail }}</li>
						<li class="contacts__item">
							<ul class="social">
								<li v-for="(social, key) in sociallist" :key="key" class="social__item">
									<a class="social__link" href="#0" :title="social.name">
										<Icon :icon="['fab', social.icon]" />
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div class="contacts__right"></div>
			</div>
		</div>
	</div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

export default {
	name: "Contacts",
	components: {
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
	},
	/* data() {
		return {
			sociallist: [
				{ name: "Facebook", icon: "facebook" },
				{ name: "Twitter", icon: "twitter" },
				{ name: "Instagram", icon: "instagram" },
				{ name: "LinkedIn", icon: "linkedin" },
			],
		};
	}, */
};
</script>
