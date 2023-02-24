import React, { Component } from "react";
import { AppContext } from "../../AppContext.js";

import coin from "../../pages/Shop/List/assets/coin.png"

import "./TopBar.scss";

export default class TopBar extends Component {
	render() {
		return (
			<AppContext.Consumer>
				{({ balance }) => (
					<header className="top-bar">
						<div className="top-bar__container">
							<div className="top-bar__panel">
								<div className="top-bar__balance-wrap">
									<img src={coin} alt="Баланс" className="top-bar__coin" height={17} />
									<span className="top-bar__balance">{balance}</span>
								</div>
							</div>
						</div>
					</header>
				)}
			</AppContext.Consumer>
		);
	}
}