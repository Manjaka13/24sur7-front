import "@styles/index.scss";
// import Homepage from "@routes/Homepage.js";

const features = {
	HomePage: ["HomePage"],
};

const { id } = document.body;
if (features[id]) {
	features[id].forEach(async (feature) => {
		const m = await import(`./routes/${feature}`);
		m.default.init();
	});
}
