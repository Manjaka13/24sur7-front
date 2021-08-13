import "@styles/index.scss";

const features = {
	HomePage: ["HomePage"],
	Devis: ["Devis"],
};

const { id } = document.body;
if (features[id]) {
	features[id].forEach(async (feature) => {
		const m = await import(`./routes/${feature}`);
		m.default.init();
	});
}
