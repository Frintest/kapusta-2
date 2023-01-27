import React, { Component } from "react";
import { cloneDeep } from "lodash";
import { FieldContext } from "./FileldContext.jsx";

import Cell from "./Cell/Cell.jsx";

import "./Field.scss";

import textureGrass from "./assets/field-grass.png";
import textureRoad from "./assets/field-road.png";
import textureCross from "./assets/field-cross.png";
import textureDigUp from "./assets/field-dig-up.png";

const mesh_db = [
	{
		name: "grass",
		src: textureGrass,
		isBreak: true,
		alt: "заросли",
		modificators: {},
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
		modificators: {},
	},
];

export default class Field extends Component {
	createField = (mesh) => {
		let field = [];
		const fieldWidth = 10;
		const fieldHeight = 10;

		let grassMesh = mesh[0],
			roadMesh = mesh[1],
			crossMesh = mesh[2];

		for (let i = 0; i < fieldHeight; i++) {
			field[i] = [];

			for (let j = 0; j < fieldWidth; j++) {
				field[i].push(grassMesh);
			}
		}
		
		this.addRoad(field, roadMesh);
		this.addCross(field, crossMesh);

		return field;
	}


	addRoad = (field, mesh) => {
		const vertical = mesh; // нет смысла клонировать
		const horizontal = cloneDeep(mesh);

		vertical.modificators.orientation = "vertical";
		horizontal.modificators.orientation = "horizontal";

		field[0][4] = field[1][4] = field[2][4] = field[3][4] = field[5][4] = field[6][4] = vertical;
		field[5][6] = field[6][6] = field[7][6] = field[8][6] = vertical;

		field[4][0] = field[4][1] = field[4][3] = field[4][5] = field[4][7] = field[4][8] = horizontal;
	}


	addCross = (field, mesh) => {
		field[4][6] = mesh;
	}


	constructor() {
		super();
		this.state = {
			field: this.createField(mesh_db),
		};
	}


	convertIndex = (index) => {
		const rowIndex = Math.trunc(index / 10);
		const cellIndex = index % 10;

		return {rowIndex, cellIndex};
	}


	setActiveCell = (index) => {
		const field = this.state.field.slice();
	
		field.forEach((row) => {
			row.forEach((cell) => {
				cell.modificators.active = false;
			});
		});
		
		const { rowIndex, cellIndex } = this.convertIndex(index);

		// name = isActive так как неизвестно, будет ли ячейка активна, например это засисит от поля isBreak
		let isActiveCell = cloneDeep(field[rowIndex][cellIndex]);

		const { isBreak } = isActiveCell;

		// TODO: если в modificators присутствует поле orientation = "horizontal",
		// то оно не меняется, но визуально оно равно vertical
		// возможно из-за неправильного клонирования объекта
		// fix bag: isBreak = false (где есть orientation)

		isActiveCell.modificators.active = isBreak ? true : false;

		field[rowIndex][cellIndex] = isActiveCell;

		this.setState({field: field});
	}


	deleteActiveCell = (index) => {
		const field = this.state.field.slice();

		const { rowIndex, cellIndex } = this.convertIndex(index);

		field[rowIndex][cellIndex].modificators.active = false

		this.setState({field: field});
	}


	digUp = (index) => {
		const field = this.state.field.slice();

		const { rowIndex, cellIndex } = this.convertIndex(index);

		field[rowIndex][cellIndex].src = textureDigUp;

		this.setState({field: field});
	}


	render() {
		const { field } = this.state;

		return (
			<FieldContext.Provider value={{
				setActiveCell: this.setActiveCell,
				deleteActiveCell: this.deleteActiveCell,
				digUp: this.digUp,
			}}>
				<section className="field">
					<div className="field__container">
						<div className="field__content">
							{field.map((row, indexRow) => (
								<div className="field__row" key={indexRow}>
									{
										row.map(({ ...cell }, indexCell) => {
											const index = Number(`${indexRow}${indexCell}`);
			
											return (
												<Cell cell={cell} index={index} key={index} />
											);
										})
									}
								</div>
							))}
						</div>
					</div>
				</section>
			</FieldContext.Provider>
		);
	}
}