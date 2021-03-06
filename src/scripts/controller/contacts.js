import http from "@service/http";
import WS from "@scripts/ws/index.js";

export const getContacts = (params, loader) => async (type) =>
	await http.get({
		url: WS.contacts[type],
		data: params,
		loader: loader,
	});
