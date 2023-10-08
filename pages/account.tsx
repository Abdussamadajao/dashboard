import React from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import Card from '../components/Overview/Card';
import Tables from '../components/Overview/AccountTables';
import { card } from '../data';

const account = () => {
	return (
		<div className='account'>
			<div className='account__content'>
				<h1 className='title'>Account</h1>
				<div className='account__card__wrapper'>
					{card.map((item, index) => (
						<div className='account__balance__card' key={index}>
							<Card item={item} />
						</div>
					))}

					<div className='add__card'>
						<div className='add__card__surface'>
							<h2 className='add__card__title'>Add New Card</h2>
							<div>
								<BsPlusCircle />
							</div>
						</div>
					</div>
				</div>

				<Tables />
			</div>
		</div>
	);
};

export default account;
