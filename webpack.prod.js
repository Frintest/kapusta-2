const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const {
// 	BundleAnalyzerPlugin
// } = require('webpack-bundle-analyzer');

module.exports = {
	mode: 'production',
	context: path.resolve(__dirname, 'src'),

	entry: {
		index: {
			import: './index.js',
			filename: 'js/[name].js'
		}
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true
	},
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserPlugin()
		]
	},
	module: {
		rules: [
			// ? ===== jsx =====
			{
				test: /\.(js|jsx)$/i,
				exclude: '/node_modules/',
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react']
					}
				}
			},

			// ? ===== css =====
			{
				test: /\.(css)$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},

			// ? ===== scss =====
			{
				test: /\.(s[ac]ss)$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},

			// ? ===== fonts =====
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]'
				}
			},

			// ? ===== img =====
			{
				test: /\.(png|jpe?g|gif|svg|webp)$/i,
				type: 'asset/resource',
				exclude: /fonts/,
				generator: {
					filename: 'img/[name][ext]'
				}
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: '../public/index.html',
			filename: 'index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css'
		}),
		// new BundleAnalyzerPlugin()
	]
};