import React, { FunctionComponent } from 'react';
import { ICard } from '../../type';
// import styles from '../../styles/Overview.module.scss';

const Card: FunctionComponent<{ item: ICard }> = ({
	item: { number, title },
}) => {
	return (
		<>
			<h1 className='title'>{title}</h1>

			<div>
				<span>{number}</span>
			</div>
		</>
	);
};

export default Card;
