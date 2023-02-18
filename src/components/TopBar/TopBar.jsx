import React, { Component } from "react";
import { LocalContext } from "../../LocalContext.jsx";

import coin from "../../pages/Shop/List/assets/coin.png"

import "./TopBar.scss";

export default class TopBar extends Component {
	render() {
		return (
			<LocalContext.Consumer>
				{({ balance }) => (
					<header className="top-bar">
						<div className="top-bar__container">
							<div className="top-bar__panel">
								<div className="top-bar__balance-wrap" tabIndex={0}>
									<img src={coin} alt="" className="top-bar__coin" height={17} />
									<span className="top-bar__balance">{balance}</span>
								</div>
							</div>
						</div>
					</header>
				)}
			</LocalContext.Consumer>
		);
	}
}