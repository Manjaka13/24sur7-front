<template>
	<div class="navbar">
		<div class="container">
			<div class="navbar__top">
				<div class="navbar__left">
					<div class="logo">
						<Icon icon="shipping-fast" />
					</div>
					<h1 class="title-3 bold no-select title">
						24<span class="title-picked">sur</span>7
					</h1>
				</div>
				<Searchbar :equipementcategories="equipementcategories" />
				<button class="trigger-button" @click="toggleMenu">
					<Icon class="icon" icon="bars" />
				</button>
			</div>
			<div class="separator"></div>
			<div class="navbar__bottom">
				<ul class="sections">
					<li
						v-for="(section, key) in sectionList"
						:key="key"
						class="sections__item"
					>
						<a
							class="sections__link"
							:href="section.link"
							:title="section.description"
						>
							<Icon class="icon" :icon="section.icon" /> {{ section.name }}
						</a>
						<div v-if="key < sectionList.length - 1" class="vertical-separator"></div>
					</li>
				</ul>
			</div>
		</div>
		<Menu
			:opened="menuOpened"
			:sectionList="sectionList"
			:equipementcategories="equipementcategories"
			@close="toggleMenu"
		/>
	</div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Searchbar from "./Searchbar.vue";
import Menu from "./Menu.vue";

library.add(fas);

export default {
	name: "Navbar",
	components: {
		Icon: FontAwesomeIcon,
		Searchbar,
		Menu,
	},
	props: {
		equipementcategories: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			sectionList: [
				{
					name: "Accueil",
					icon: "home",
					link: "/",
					description: "Revenir à l'accueil.",
				},
				{
					name: "Devis",
					icon: "pencil-ruler",
					link: "/devis.html",
					description: "Demander un devis payant.",
				},
				{
					name: "Abonnement",
					icon: "wallet",
					link: "#0",
					description: "Nos prix.",
				},
				{
					name: "Devises",
					icon: "euro-sign",
					link: "#0",
					description: "Cours des devises en temps réel.",
				},
				{
					name: "Réussites",
					icon: "clipboard-check",
					link: "#0",
					description: "Nos meilleures réussites !",
				},
			],
			menuOpened: false,
		};
	},
	methods: {
		toggleMenu() {
			this.menuOpened = !this.menuOpened;
		},
	},
};
</script>
