import { ICard, ILink } from './type';
import { MdOutlineViewQuilt } from 'react-icons/md';
import { IoWalletOutline } from 'react-icons/io5';
import { BiTransferAlt } from 'react-icons/bi';
import { FaRegFileAlt } from 'react-icons/fa';
import { BsCreditCard } from 'react-icons/bs';
import { RiArrowUpDownFill } from 'react-icons/ri';

export const links: ILink[] = [
	{
		route: '/',
		name: 'Overview',
		Icon: MdOutlineViewQuilt,
	},
	{
		route: '/account',
		name: 'Account',
		Icon: IoWalletOutline,
	},
	{
		route: '/transfer',
		name: 'Transfer',
		Icon: BiTransferAlt,
	},
	{
		route: '/statement',
		name: 'Statement',
		Icon: FaRegFileAlt,
	},
	{
		route: '/card',
		name: 'Card',
		Icon: BsCreditCard,
	},
	{
		route: '/transaction',
		name: 'Transaction',
		Icon: RiArrowUpDownFill,
	},
];

export const card: ICard[] = [
	{
		title: 'Current Account',
		number: "$5,400"
	},
	{
		title: 'Current Account',
		number: "$10,200"
	}
]


