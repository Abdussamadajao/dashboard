import React, { FunctionComponent } from 'react';
import { ILink } from '../../type';
import styles from '../../styles/sidebar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LayoutLinks: FunctionComponent<{ link: ILink }> = ({
	link: { name, Icon, route },
}) => {
	const router = useRouter();
	return (
		<span>
			<Link href={route}>
				<a className={router.asPath == route ? 'active' : 'link'}>
					<span>
						<Icon className='icon' />
						{name}
					</span>
				</a>
			</Link>
		</span>
	);
};

export default LayoutLinks;
