import React from 'react';
import { Table, Tag } from 'antd';

const TransactionTable = () => {
	const columns = [
		{
			title: 'Type',
			key: 'tags',
			dataIndex: 'tags',
			render: (tags: any) => (
				<span>
					{tags.map((tag: any) => {
						let Background = tag.length < 6 ? 'green' : 'blue';
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
			title: 'Account',
			dataIndex: 'account',
			key: 'account',
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
	];

	const data = [
		{
			key: '1',
			date: '11/02/20',
			detail: 'Sub Box Restaurant',
			amount: '$70',
			account: 'Current Account',
			tags: ['Debit'],
		},
		{
			key: '2',
			date: '10/15/20',
			detail: 'Palace Supermarket',
			amount: '$250',
			account: 'Current Account',
			tags: ['Debit'],
		},
		{
			key: '3',
			date: '10/10/20',
			detail: 'Refund',
			amount: '$100',
			account: 'Current Account',
			tags: ['Refund'],
		},
		{
			key: '4',
			date: '10/10/20',
			detail: 'Palace Supermarket',
			amount: '$250',
			account: 'Current Account',
			tags: ['Debit'],
		},
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

export default TransactionTable;
