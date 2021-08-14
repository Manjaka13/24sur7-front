<template>
	<div class="offers">
		<div class="container">
			<h2 class="title-3 offers__title">Abonnez-vous !</h2>
			<div class="offers__box">
				<div class="offers__item">
					<div class="top">
						<h3 class="title-5 title">Basic</h3>
						<div class="price-box">
							<p class="title-4 bold unit">Ar</p>
							<h4 class="title-1 bold price">{{ pricing.basic }}</h4>
						</div>
					</div>
					<div class="separator"></div>
					<ul class="advantages">
						<li class="text advantages__item advantages__item--check">
							<Icon class="icon" icon="check-circle" />Enim ut tellus element
						</li>
						<li class="text advantages__item">
							<Icon class="icon" icon="times" />Enim ut tellus element
						</li>
						<li class="text advantages__item">
							<Icon class="icon" icon="times" />Enim ut tellus element
						</li>
					</ul>
				</div>
				<div class="offers__item offers__item--special">
					<div class="top">
						<h3 class="title-3 title">Pro</h3>
						<div class="price-box">
							<p class="title-4 bold unit">Ar</p>
							<h4 class="title-1 bold price">{{ pricing.pro }}</h4>
						</div>
					</div>
					<img
						class="offers__badge"
						src="@images/badge recommande.png"
						alt="Recommandé"
					/>
					<div class="separator"></div>
					<ul class="advantages">
						<li class="text advantages__item advantages__item--check">
							<Icon class="icon" icon="check-circle" />Enim ut tellus element
						</li>
						<li class="text advantages__item advantages__item--check">
							<Icon class="icon" icon="check-circle" />Enim ut tellus element
						</li>
						<li class="text advantages__item advantages__item--check">
							<Icon class="icon" icon="check-circle" />Enim ut tellus element
						</li>
					</ul>
				</div>
				<div class="offers__item">
					<div class="top">
						<h3 class="title-5 title">Premium</h3>
						<div class="price-box">
							<p class="title-4 bold unit">Ar</p>
							<h4 class="title-1 bold price">{{ pricing.premium }}</h4>
						</div>
					</div>
					<div class="separator"></div>
					<ul class="advantages">
						<li class="text advantages__item advantages__item--check">
							<Icon class="icon" icon="check-circle" />Enim ut tellus element
						</li>
						<li class="text advantages__item advantages__item--check">
							<Icon class="icon" icon="check-circle" />Enim ut tellus element
						</li>
						<li class="text advantages__item">
							<Icon class="icon" icon="times" />Enim ut tellus element
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faCheckCircle, faTimes);

export default {
	name: "Offers",
	components: {
		Icon: FontAwesomeIcon,
	},
	props: {
		pricing: {
			type: Object,
			default: () => {
				return {
					basic: "?? ???",
					pro: "?? ???",
					premium: "?? ???",
				};
			},
		},
	},
};
</script>
