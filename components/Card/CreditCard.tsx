import React from 'react';
import { RiVisaLine } from 'react-icons/ri';

const CreditCard = () => {
	return (
		<div className='credit__card__wrapper'>
			<div className='credit__gousian__layer'>
				<div className='credit__card__surface'>
					<div className='credit__card__logo'>
						<span>Credit</span>
						<RiVisaLine className='icon' />
					</div>
					<div className='card__details'>
						<span>John Doe</span>
						<small>4801 - 3000 - 2100 - 5300</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreditCard;
