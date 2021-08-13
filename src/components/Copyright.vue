<template>
	<div class="copyright">
		<div class="container">
			<div class="separator"></div>
			<div class="copyright__box">
				<p class="text">
					Copyright © 2020 <span class="bold">24sur7</span>. Tous droits réservés.
				</p>
				<div class="payment">
					<p class="text payment-text">
						<Icon class="icon" icon="credit-card" /> Payment sécurisé sur notre site
						par:
					</p>
					<ul class="payment-list">
						<li class="payment-item">
							<a class="link" href="#0" title="Telma">
								<img class="image" src="@images/mvola.png" alt="MVola by Telma" />
							</a>
						</li>
						<li class="payment-item">
							<a href="#0" title="Orange">
								<img class="image" src="@images/orange money.jpg" alt="Orange Money" />
							</a>
						</li>
						<li class="payment-item">
							<a href="#0" title="Airtel">
								<img class="image" src="@images/airtel money.jpg" alt="Airtel money" />
							</a>
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
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

library.add(faCreditCard);

export default {
	name: "Copyright",
	components: {
		Icon: FontAwesomeIcon,
	},
};
</script>
