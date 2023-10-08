import Image from 'next/image';
import Link from 'next/link';
import React, { FunctionComponent, useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { links } from '../../data';
import styles from '../../styles/sidebar.module.scss';
import LayoutLinks from './LayoutLinks';
import { RiLogoutBoxLine } from 'react-icons/ri';

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='image'>
				<Image src='/Asset/Bird.svg' width={120} height={120} />
			</div>
			<div className='links'>
				{links.map((link, index) => (
					<LayoutLinks link={link} key={index} />
				))}

				<div className='other'>
					<div className='buttons'>
						<Link href='/settings'>
							<a className='settings'>
								<IoSettingsOutline className='icon' />
								Settings
							</a>
						</Link>

						<Link href='/profile'>
							<a className='profile'>
								<CgProfile className='icon' />
								Profile
							</a>
						</Link>

						<button>
							<RiLogoutBoxLine className='icon' />
							Logout
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
