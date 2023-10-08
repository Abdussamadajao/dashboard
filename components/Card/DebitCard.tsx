import React from 'react';
import { RiVisaLine } from 'react-icons/ri';

const DebitCard = () => {
	return (
		<div className='visa__card__wrapper'>
			<div className='visa__card__background'>
				<div className='visa__card'>
					<div className='card__logo'>
						<span>Debit</span>
						<RiVisaLine className='icon' />
					</div>
					<div className='card__details'>
						<span>John Doe</span>
						<small>4802 - 2215 - 1183 - 4289</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DebitCard;
