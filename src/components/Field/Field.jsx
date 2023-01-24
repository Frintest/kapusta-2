import React, { Component } from "react";
import { FieldContext } from "./FileldContext.jsx";

import Cell from "./Cell/Cell.jsx";

import "./Field.scss";

import textureGrass from "./assets/field-grass.png";
import textureRoad from "./assets/field-road.png";
import textureCross from "./assets/field-cross.png";

const mesh_db = [
	{
		name: "grass",
		src: textureGrass,
		isBreak: true,
		alt: "заросли",
	},
	{
		name:"road",
		src: textureRoad,
		isBreak: false,
		alt: "дорожка",
		modificators: {},
	},
	{
		name:"cross",
		src: textureCross,
		isBreak: false,
		alt: "перекрёсток",
	},
];

export default class Field extends Component {
	createField = (mesh) => {
		let field = [];
		const fieldWidth = 10;
		const fieldHeight = 10;

		let grassMesh = mesh[0];
		let roadMesh = mesh[1];
		let crossMesh = mesh[2];

		for (let i = 0; i < fieldHeight; i++) {
			field[i] = new Array(fieldWidth).fill(grassMesh);
		}
		
		this.addRoad(field, roadMesh);
		this.addCross(field, crossMesh);

		return field;
	}


	addRoad = (field, mesh) => {
		let vertical = { ...mesh, modificators: {orientation: "vertical"} };
		let horizontal = { ...mesh, modificators: {orientation: "horizontal"} };

		field[0][4] = field[1][4] = field[2][4] = field[3][4] = field[5][4] = field[6][4] = vertical;
		field[5][6] = field[6][6] = field[7][6] = field[8][6] = vertical;

		field[4][0] = field[4][1] = field[4][3] = field[4][5] = field[4][7] = field[4][8] = horizontal;
	}


	addCross = (field, mesh) => {
		field[4][4], field[4][6] = mesh;
	}


	constructor() {
		super();
		this.state = {
			indexActive: null,
		};
	}


	setActiveCell = (index) => {
		this.setState({
			indexActive: index,
		})
	}


	render() {
		const { indexActive } = this.state;

		return (
			<section className="field">
				<div className="field__container">
					<div className="field__content">
						<FieldContext.Provider value={{
							setActiveCell: this.setActiveCell
						}}>{
							this.createField(mesh_db).map((row, indexRow) => {
								return (
									<div className="field__row" key={indexRow}>
										{
											row.map(({ isBreak, ...cell }, indexCell) => {
												const index = `${indexRow}${indexCell}`;
												let active = ((indexActive === index) && isBreak);
				
												return (
													<Cell
														cell={cell}
														index={index}
														isActive={active}
														key={index}
													/>
												);
											})
										}
									</div>
								);
							})}
						</FieldContext.Provider>
					</div>
				</div>
			</section>
		);
	}
}