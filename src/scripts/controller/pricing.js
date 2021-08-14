import http from "@service/http";
import WS from "@scripts/ws/index.js";

export const getPricing = (params, loader) => async (type) =>
	await http.get({
		url: WS.pricing[type],
		data: params,
		loader: loader,
	});
