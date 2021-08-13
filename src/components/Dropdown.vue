<template>
	<ul :class="dropdownClass">
		<li
			v-for="(item, key) in listItems"
			:key="key"
			@click="click(key)"
			class="dropdown__item"
		>
			<div class="dropdown__left">
				<Icon v-if="key < icons.length" :icon="icons[key]" class="icon" />
				{{ item }}
			</div>
			<p class="text--light dropdown__right">{{ sideList[key] || "" }}</p>
		</li>
	</ul>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default {
	name: "Dropdown",
	components: {
		Icon: FontAwesomeIcon,
	},
	props: {
		list: {
			type: Array,
			default: null,
		},
		sideList: {
			type: Array,
			default: () => [],
		},
		icons: {
			type: Array,
			default: () => [],
		},
		max: {
			type: Number,
			default: 0,
		},
	},
	data() {
		return {
			listItems: [],
			dropdownClass: "dropdown",
			displayed: true,
		};
	},
	methods: {
		click(id) {
			this.displayed = false;
			this.$emit("click", id);
		},
		updateDropdownClass() {
			if (this.displayed) this.dropdownClass = "dropdown";
			else this.dropdownClass = "dropdown dropdown--hidden";
		},
	},
	watch: {
		displayed: {
			immediate: true,
			handler() {
				this.updateDropdownClass();
			},
		},
		list: {
			immediate: true,
			handler() {
				this.displayed = true;
				if (this.max > 0)
					this.listItems = this.list.filter((item, key) => key < this.max);
				else this.listItems = [...this.list];
				if (this.listItems.length === 0) this.displayed = false;
				this.updateDropdownClass();
			},
		},
	},
};
</script>
