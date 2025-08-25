'use client';
import Image from 'next/image';
import { NavLinksList } from '@/lib/navLinksList';
import { usePathname } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';
import { useEffect, useState } from 'react';

export default function Footer() {
	const pathname = usePathname();
	const [langName, setLangName] = useState(defaultLocale);
	const [linkList, setLinkList] = useState([]);

	useEffect(() => {
		const fetchLinksList = async () => {
			// Determine language based on new routing strategy
			if (pathname.startsWith('/en')) {
				setLangName('en');
			} else {
				setLangName('ar'); // Default to Arabic for all other paths
			}
			setLinkList(NavLinksList[`LINK_${langName.toUpperCase()}`] || []);
		};
		fetchLinksList();
	}, [pathname, langName]);

	return (
		<footer className='w-full px-5 py-10 bg-[#202020] text-[#f7f7f7] '>
			<div className='container mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-2 text-sm'>
				<div className='flex flex-col items-center md:items-start'>
					<a
						aria-label='Noaat homepage'
						className='flex items-center mb-3'
						title='Noaat - Smart Food Deals & Cashback'
						href={langName === 'en' ? '/en' : '/'}
					>
						<Image
							width={200}
							height={200}
							src={'/logo.png'}
							className='transition-all hover:scale-110 w-6 md:w-10 h-6 md:h-10'
							alt='Noaat Logo'
						></Image>
						<h2 className='ml-3 font-bold leading-5 text-2xl'>{langName === 'ar' ? 'نقط' : 'Noaat'}</h2>
					</a>
					<div className='flex flex-wrap justify-center gap-x-2 md:gap-x-5 gap-y-1'>
						{linkList.map((link, index) => {
							return (
								<a
									key={index}
									title={link.name}
									href={langName === 'en' ? `/en${link.url}` : link.url}
								>
									{link.name}
								</a>
							);
						})}
					</div>
				</div>

				<p>
					© 2025{' '}
					<a
						title={'Noaat'}
						href='https://noaat.com'
						target='_blank'
						className='hover:text-purple-400 transition-colors'
					>
						Noaat
					</a>
					. {langName === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.
				</p>
			</div>
		</footer>
	);
}
