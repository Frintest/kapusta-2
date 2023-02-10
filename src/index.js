import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.js";

import "./favicon.svg";

const root = ReactDOM.createRoot(document.getElementById("wrapper"));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);