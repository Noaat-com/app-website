'use client';
import Image from 'next/image';
import { MdMenu } from 'react-icons/md';
import { useEffect, useState } from 'react';
import ThemeToggle from './themeToggle';
import LangSwitch from './langSwitch';

import { usePathname } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';
import { NavLinksList } from '@/lib/navLinksList';

export default function Navbar({ lang }) {
	const pathname = usePathname();
	const [langName, setLangName] = useState(lang || defaultLocale);
	const [linkList, setLinkList] = useState([]);

	useEffect(() => {
		// Determine language based on new routing strategy
		if (pathname.startsWith('/en')) {
			setLangName('en');
		} else {
			setLangName('ar'); // Default to Arabic for all other paths
		}
		setLinkList(NavLinksList[`LINK_${langName.toUpperCase()}`] || []);
	}, [pathname, langName]);

	return (
		<header className='w-full relative z-50 bg-base-100 p-5 pb-0 container mx-auto md:mb-5 flex justify-between items-center'>
			<a
				aria-label='Noaat homepage'
				className='flex items-center w-1/2 md:w-1/5'
				title='Noaat homepage'
				href={langName === 'en' ? '/en' : '/'}
			>
				<Image
					width={100}
					height={100}
					src={'/logo.png'}
					className='transition-all hover:scale-110 w-8 md:w-12 h-8 md:h-12'
					alt='Noaat Logo'
				></Image>
				<h2 className='ml-3 font-bold leading-5 text-2xl'>{langName === 'ar' ? 'نقط' : 'Noaat'}</h2>
			</a>

			<ul className='w-3/5 px-5 font-medium hidden md:flex flex-nowrap items-center justify-around'>
				{linkList.map((link, index) => {
					return (
						<li
							key={index}
							className='group py-3 text-center'
						>
							<a
								aria-label={link.name}
								className='group relative'
								title={link.name}
								href={langName === 'en' ? `/en${link.url}` : link.url}
							>
								{link.name}
								<div className='absolute left-[50%] group-hover:left-0 w-0 group-hover:w-full h-[3px] transition-all duration-300 bg-base-content/90'></div>
							</a>
						</li>
					);
				})}
			</ul>

			<div className='md:w-1/5 flex items-center justify-end gap-2'>
				<ThemeToggle />
				<LangSwitch />
				<details className='flex md:hidden dropdown dropdown-end'>
					<summary className='btn btn-ghost p-0'>
						<MdMenu size={18} />
					</summary>
					<ul className='menu dropdown-content z-[100] p-2 shadow bg-base-100 opacity-100 rounded-box w-52'>
						{linkList.map((link, index) => {
							return (
								<li key={index}>
									<a
										aria-label={link.name}
										title={link.name}
										href={langName === 'en' ? `/en${link.url}` : link.url}
									>
										{link.name}
									</a>
								</li>
							);
						})}
					</ul>
				</details>
			</div>
		</header>
	);
}
