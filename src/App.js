import React, { Component, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { AppContext } from "./AppContext.js";

import TopBar from "./components/TopBar/TopBar.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Field from "./pages/Field/Field.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import Storage from "./pages/Storage/Storage.jsx";

import "focus-visible";
import "./scss/main.scss";
import "./scss/media/media.scss";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			balance: 10000,
			storage: {
				fruits: [],
				vegetables: [],
				seeds: [],
			},
		};
	}

	upBalance = (price) => {
		this.setState(({ balance }) => ({balance: balance + price}));
	}


	downBalance = (price) => {
		this.setState(({ balance }) => ({balance: balance - price}));
	}


	upCountProduct = (category, objectProduct) => {
		const storage = structuredClone(this.state.storage);

		const product = storage[category].find(elem => elem.name === objectProduct.name);
		product.count += 1;

		this.setState({storage: storage});
	}


	downCountProduct = (category, objectProduct) => {
		const storage = structuredClone(this.state.storage);

		const product = storage[category].find(elem => elem.name === objectProduct.name);
		if (product.count === 1) {
			this.deleteProductInStorage(category, objectProduct);
		} else {
			product.count -= 1;
			this.setState({storage: storage});
		}
	}


	addProductInStorage = (category, objectProduct) => {
		const storage = structuredClone(this.state.storage);

		const product = storage[category].find(elem => elem.name === objectProduct.name);
		if (product === undefined) {
			objectProduct.count = 1;
			storage[category].push(objectProduct);
			this.setState({storage: storage});
		} else {
			this.upCountProduct(category, objectProduct);
		}
	}


	deleteProductInStorage = (category, objectProduct) => {
		const storage = structuredClone(this.state.storage);

		const product = storage[category].find(elem => elem.name === objectProduct.name);
		storage[category].pop(product);

		this.setState({storage: storage});
	}


	// changeProductInStorage = (category, objectProduct) => {
	// 	const storage = cloneDeep(this.state.storage);

	// 	const product = storage[category].find(elem => elem.name === objectProduct.name);


	// 	this.setState({storage: storage});
	// }

	render() {
		const { balance, storage } = this.state;

		return (
			<AppContext.Provider value={{
				balance: balance,
				upBalance: this.upBalance, // (price)
				downBalance: this.downBalance, // (price)
				storage: storage,
				addProductInStorage: this.addProductInStorage, // (category, objectProduct)
				upCountProduct: this.upCountProduct, // (countProp)
				downCountProduct: this.downCountProduct, // (countProp)
			}}>
				<Fragment>
					<TopBar />

					<main className="main">
						<Routes>
							<Route path="/" element={<Storage />}></Route>
							<Route path="/field" element={<Field />}></Route>
							<Route path="/shop" element={<Shop />}></Route>
							<Route path="/storage" element={<Storage />}></Route>
						</Routes>
					</main>

					<Menu />
				</Fragment>
			</AppContext.Provider>
		);
	}
}