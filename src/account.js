const account = {
	register(name, avatar, token) {
		if (name) sessionStorage.setItem("name", name);
		if (avatar) sessionStorage.setItem("avatar", avatar);
		if (token) sessionStorage.setItem("jwt_token", token);
		console.log("User registered: ", name, avatar, token);
	},
	unregister() {
		sessionStorage.removeItem("name");
		sessionStorage.removeItem("avatar");
		sessionStorage.removeItem("jwt_token");
		console.log("User unregistered !");
	},
	get() {
		const name = sessionStorage.getItem("name") || "";
		return {
			name,
			avatar: sessionStorage.getItem("avatar") || "",
			token: sessionStorage.getItem("jwt_token") || "",
			connected: name.length > 0,
		};
	},
};
export default account;
