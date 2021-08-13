const path = require("path");
const Dotenv = require("dotenv-webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const STATIC_FOLDER = "public";

module.exports = (env) => {
	const envPath =
		"./.env." +
		(env.development ? "development" : env.local ? "local" : "production");
	console.log("Environment variable: " + envPath);
	return {
		mode: env.development || env.local ? "development" : "production",
		entry: {
			app: path.resolve(__dirname, "src/index.js"),
		},
		output: {
			filename: "bundle.js",
			path: path.resolve(__dirname, STATIC_FOLDER),
		},
		devtool: "source-map",
		devServer: {
			contentBase: path.join(__dirname, STATIC_FOLDER),
			compress: true,
			port: 5000,
			historyApiFallback: {
				index: "notfound.html",
			},
		},
		plugins: [
			new VueLoaderPlugin(),
			new Dotenv({
				path: envPath,
			}),
		],
		module: {
			rules: [
				{
					test: /\.css$/i,
					use: ["style-loader", "css-loader"],
				},
				{
					test: /\.(png|svg|jpg|jpeg|gif)$/i,
					type: "asset/resource",
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/i,
					type: "asset/resource",
				},
				{
					test: /\.s[ac]ss$/i,
					use: ["style-loader", "css-loader", "sass-loader"],
				},
				{
					test: /\.vue$/i,
					loader: "vue-loader",
				},
			],
		},
		resolve: {
			alias: {
				"@fonts": path.resolve(__dirname, "src/assets/fonts/"),
				"@styles": path.resolve(__dirname, "src/assets/styles/"),
				"@images": path.resolve(__dirname, "src/assets/images/"),
				"@components": path.resolve(__dirname, "src/components/"),
				"@routes": path.resolve(__dirname, "src/routes/"),
				"@scripts": path.resolve(__dirname, "src/scripts/"),
				"@service": path.resolve(__dirname, "src/scripts/service"),
				"@controller": path.resolve(__dirname, "src/scripts/controller"),
			},
		},
	};
};
