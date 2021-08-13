import http from "@service/http";
import WS from "@scripts/ws/index.js";

export const getEquipement = (params, loader) => async (type) =>
	await http.get({
		url: WS.equipement[type],
		data: params,
		loader: loader,
	});
