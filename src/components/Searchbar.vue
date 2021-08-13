<template>
	<form class="searchbar">
		<select
			v-if="categoryList && categoryList.length > 0"
			class="input category-list"
			v-model="currentCategory"
		>
			<option v-for="(category, key) in categoryList" :key="key" :value="category">
				{{ category }}
			</option>
		</select>
		<div class="search-block">
			<input
				class="input search-input"
				type="text"
				placeholder="Je recherche..."
				v-model="searchText"
				@blur="emptySearchList"
			/>
			<button class="button" type="submit">
				<Icon class="icon" icon="search" />
				<span class="search-text">Rechercher</span>
			</button>
			<Dropdown
				:list="searchList"
				:sideList="searchPrices"
				:icon="searchIcons"
				@click="selectSuggestion"
			/>
		</div>
	</form>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "@components/Dropdown.vue";

library.add(faSearch);

export default {
	name: "SearchBar",
	components: {
		Icon: FontAwesomeIcon,
		Dropdown,
	},
	data() {
		return {
			searchList: ["iPhone 5", "iPhone 6", "iPad 3", "Boose QC135"],
			searchIcons: ["mobile", "mobile", "tablet", "headphones"],
			searchPrices: ["210.99 €", "265.99 €", "143.99 €", "129.99 €"],
			searchMax: 3,
			currentCategory: "Tout",
			categoryList: [
				"Tout",
				"Electronique & Utilitaire",
				"Décoration",
				"Intérieur",
				"Jouet & Loisir",
			],
			searchText: "",
		};
	},
	methods: {
		selectSuggestion(id) {
			console.log("Selected suggestion: ", this.searchList[id]);
			this.searchText = this.searchList[id];
		},
		emptySearchList() {
			setTimeout(() => {
				this.searchList = [];
			}, 100);
		},
	},
	watch: {
		searchText: {
			immediate: true,
			handler(str) {
				if (str.length > 2) {
					if (this.searchList.indexOf(this.searchText) >= 0) this.searchList = [];
					else this.searchList = ["iPhone 5", "iPhone 6", "iPad 3", "Boose QC135"];
				} else this.searchList = [];
			},
		},
	},
};
</script>
