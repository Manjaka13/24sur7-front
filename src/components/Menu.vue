<template>
	<div :class="menuClass">
		<div class="container">
			<div class="top"></div>
			<Searchbar :equipementcategories="equipementcategories" />
			<ul class="menu__section">
				<li v-for="(section, key) in sectionList" :key="key" class="menu__item">
					<a
						class="text menu__link"
						:href="section.link"
						:title="section.description"
					>
						<span class="content"
							><Icon class="icon" :icon="section.icon" /> {{ section.name }}</span
						>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Searchbar from "@components/Searchbar.vue";

library.add(fas);

export default {
	name: "Menu",
	components: {
		Icon: FontAwesomeIcon,
		Searchbar,
	},
	props: {
		opened: {
			type: Boolean,
			default: false,
		},
		sectionList: {
			type: Array,
			default: () => [],
		},
		equipementcategories: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			menuClass: "menu",
		};
	},
	mounted() {
		console.log(this.opened);
		if (this.opened) this.menuClass = "menu";
		else this.menuClass = "menu menu--shown";
		console.log(this.menuClass);
	},
};
</script>
