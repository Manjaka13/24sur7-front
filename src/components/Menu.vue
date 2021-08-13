<template>
	<div :class="menuClass">
		<div class="container">
			<div class="top"></div>
			<Searchbar />
		</div>
	</div>
</template>

<script>
import Searchbar from "@components/Searchbar.vue";

export default {
	name: "Menu",
	components: {
		Searchbar,
	},
	props: {
		opened: {
			type: Boolean,
			default: false,
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
