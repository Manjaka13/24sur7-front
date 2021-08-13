import axios from "axios";
import { baseUrl } from "@scripts/const.js";

class Http {
	axios = () => {
		const token = localStorage.getItem("token");
		const AuthStr = "Bearer ".concat(token);
		const instance = axios.create({
			baseURL: baseUrl,
			headers: {
				Authorization: AuthStr,
				"Access-Control-Allow-Origin": "*",
			},
		});
		return instance;
	};

	get = async (params) => {
		return await this.axios(params.loader)
			.get(params.url, { params: params.data })
			.then((response) => {
				return response.data;
			})
			.catch((e) => {
				console.error(e);
			});
	};

	post = async (params) => {
		return await this.axios(params.loader)
			.post(params.url, params.data)
			.then((response) => {
				return response.data;
			})
			.catch((e) => {
				console.error(e);
			});
	};
}

export default new Http();
