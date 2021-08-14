import http from "@service/http";
import WS from "@scripts/ws/index.js";

export const getCountry = (params, loader) => async (type) =>
	await http.get({
		url: WS.country[type],
		data: params,
		loader: loader,
	});
