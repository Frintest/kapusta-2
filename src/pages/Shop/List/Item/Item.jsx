import React, { Component } from "react";

import coin from "../assets/coin.png";

import "./Item.scss";

export default class Item extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { item, downBalanceClick } = this.props,
				{ src, text, price } = item;

		return (
			<li className={"shop__item" + (price >= 1000 ? " shop__item_rarity_rare" : "")}>
				<div className="shop__item-image-wrap">
					<img src={src} alt={text} className="shop__item-image" />
				</div>

				<div className="shop__item-main-content">
					<p className="shop__item-name">{text}</p>
					<div className="shop__item-price-wrap">
						<span className="shop__item-price">{price}</span>
						<img src={coin} alt="Баланс" className="shop__item-coin" height={14} />
					</div>
				</div>

				<div className="shop__item-stats" onClick={() => downBalanceClick(price)}>
					<button className="shop__item-buy-btn">
						<svg className="shop__item-buy-icon" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M12.3675 9.35C13.005 9.35 13.566 9.0015 13.855 8.4745L16.898 2.958C17.2125 2.397 16.8045 1.7 16.1585 1.7H3.5785L2.7795 0H0V1.7H1.7L4.76 8.1515L3.6125 10.2255C2.992 11.3645 3.808 12.75 5.1 12.75H15.3V11.05H5.1L6.035 9.35H12.3675ZM4.386 3.4H14.7135L12.3675 7.65H6.4005L4.386 3.4ZM5.1 13.6C4.165 13.6 3.4085 14.365 3.4085 15.3C3.4085 16.235 4.165 17 5.1 17C6.035 17 6.8 16.235 6.8 15.3C6.8 14.365 6.035 13.6 5.1 13.6ZM13.6 13.6C12.665 13.6 11.9085 14.365 11.9085 15.3C11.9085 16.235 12.665 17 13.6 17C14.535 17 15.3 16.235 15.3 15.3C15.3 14.365 14.535 13.6 13.6 13.6Z"
								fill="#A2A2A2" />
						</svg>
					</button>
				</div>
			</li>
		);
	}
}