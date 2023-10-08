import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { BsPlusCircle } from 'react-icons/bs';
import Card from '../components/Overview/Card';
import Table from '../components/Overview/AccountTables';
import { card } from '../data';
// import styles from '../styles/Overview.module.scss';
import { Select } from 'antd';

const Home: NextPage = () => {
	const { Option } = Select;
	function handleChange(value: any) {
		console.log(`selected ${value}`);
	}
	return (
		<div className='overview'>
			<div className='overviewContent'>
				<h1 className='title'>Good Morning John Doe</h1>
				<p className='text'>Account Balance</p>

				<div className='overview__card__wrapper'>
					{card.map((item, index) => (
						<div className='overview__card' key={index}>
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

				<div>
					<div className='border' />
					<h1 className='text'>Transactions</h1>
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
					<Table />
				</div>
			</div>
		</div>
	);
};

export default Home;
