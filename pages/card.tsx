import { Select } from 'antd';
import Head from 'next/head';
import React from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import CreditCard from '../components/Card/CreditCard';
import DebitCard from '../components/Card/DebitCard';
import TransactionTable from '../components/Card/TransactionTable';

const card = () => {
	const { Option } = Select;
	function handleChange(value: any) {
		console.log(`selected ${value}`);
	}
	return (
		<>
			<Head>
				<title>Card</title>
			</Head>
			<div className='card'>
				<div className='card__content'>
					<h1 className='title'>Cards</h1>
					<p className='text'>card</p>
					<div className='card__wrapper'>
						<DebitCard />
						<CreditCard />
						<div className='add__card'>
							<div className='add__card__surface'>
								<h2 className='add__card__title'>
									Add New Card
								</h2>
								<div>
									<BsPlusCircle />
								</div>
							</div>
						</div>
					</div>
					<div className='card__table'>
						<h1 className='text'>Recent Card Transactions</h1>
						<div className='select'>
							<h2>Filter By</h2>
							<div className='option'>
								<Select
									defaultValue='Type'
									style={{ width: 120 }}
									onChange={handleChange}>
									<Option value='date'>Date</Option>
									<Option value='detail'>Detail</Option>
									<Option value='amount'>Amount</Option>
									<Option value='balance'>Balance</Option>
									<Option value='type'>Type</Option>
								</Select>
							</div>
						</div>
						<TransactionTable />
					</div>
				</div>
			</div>
		</>
	);
};

export default card;
