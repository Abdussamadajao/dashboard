import React, { FunctionComponent } from 'react';
import styles from '../../styles/sidebar.module.scss';
import Sidebar from './Sidebar';
const Layout: FunctionComponent = ({ children }) => {
	return (
		<div className='layout'>
			<Sidebar />
			<div className='body'>{children}</div>
		</div>
	);
};

export default Layout;
