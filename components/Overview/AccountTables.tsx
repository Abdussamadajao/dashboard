import React from 'react';
import { Table, Tag, Space } from 'antd';
import 'antd/dist/antd.css';

const Tables = () => {
	const columns = [
		{
			title: 'Type',
			key: 'tags',
			dataIndex: 'tags',
			render: (tags: any) => (
				<span>
					{tags.map((tag: any) => {
						let Background = tag.length < 7 ? 'green' : 'blue';
						if (tag === 'Debit') {
							Background = 'red';
						}
						return (
							<Tag
								style={{
									borderRadius: '82.1429px',
									width: '61px',
									textAlign: 'center',
								}}
								color={Background}
								key={tag}>
								{tag}
							</Tag>
						);
					})}
				</span>
			),
		},
		{
			title: 'Date',
			dataIndex: 'date',
			key: 'date',
			render: (text: string) => <a>{text}</a>,
		},
		{
			title: 'Detail',
			dataIndex: 'detail',
			key: 'detail',
		},
		{
			title: 'Amount',
			dataIndex: 'amount',
			key: 'amount',
		},

		{
			title: 'Balance',
			dataIndex: 'balance',
			key: 'balance',
		},
	];

	const data = [
		{
			key: '1',
			date: '11/02/20',
			detail: 'Sub Box Restaurant',
			amount: '$70',
			balance: '$5,400',
			tags: ['Debit'],
		},
		{
			key: '2',
			date: '10/15/20',
			detail: 'Salary',
			amount: '$4,500',
			balance: '$5,330',
			tags: ['Credit'],
		},
		{
			key: '3',
			date: '10/10/20',
			detail: 'Transfer from Savings',
			amount: '$1,000',
			balance: '$6,300',
			tags: ['Transfer'],
		},
		{
			key: '4',
			date: '10/10/20',
			detail: 'Transfer from Savings',
			amount: '$250',
			balance: '$6,050',
			tags: ['Debit'],
		},
		{
			key: '5',
			date: '10/10/20',
			detail: 'Transfer from Savings',
			amount: '$50',
			balance: '$5,994',
			tags: ['Debit'],
		},
	];
	const bottomOptions = [
		{ label: 'bottomLeft', value: 'bottomLeft' },
		{ label: 'bottomCenter', value: 'bottomCenter' },
		{ label: 'bottomRight', value: 'bottomRight' },
		{ label: 'none', value: 'none' },
	];
	return (
		<Table
			columns={columns}
			dataSource={data}
			pagination={false}
			style={{
				boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
				background: 'white',
			}}
		/>
	);
};

export default Tables;
