import { getDictionary, defaultLocale } from '@/lib/i18n';
import { SiteConfig } from '@/lib/config/site';

export async function generateMetadata({ params }) {
	const langName = params.lang || defaultLocale;
	const dict = await getDictionary(langName);

	return {
		title: dict['Packages']['title'] + ' - ' + SiteConfig[langName].name,
		description: dict['Packages']['description'],
		keywords: SiteConfig[langName].keywords,
		authors: SiteConfig[langName].authors,
		creator: SiteConfig[langName].creator,
		icons: SiteConfig[langName].icons,
		metadataBase: SiteConfig[langName].metadataBase,
		openGraph: SiteConfig[langName].openGraph,
		twitter: SiteConfig[langName].twitter,
	};
}

export default async function PackagesPage({ params }) {
	const langName = params.lang || defaultLocale;
	const dict = await getDictionary(langName);

	const packages = [
		{
			name: dict['Packages']['basic']['name'],
			price: dict['Packages']['basic']['price'],
			description: dict['Packages']['basic']['description'],
			features: dict['Packages']['basic']['features'],
			recommended: false,
			color: 'from-blue-500 to-blue-600'
		},
		{
			name: dict['Packages']['premium']['name'],
			price: dict['Packages']['premium']['price'],
			description: dict['Packages']['premium']['description'],
			features: dict['Packages']['premium']['features'],
			recommended: true,
			color: 'from-purple-500 to-purple-600'
		},
		{
			name: dict['Packages']['vip']['name'],
			price: dict['Packages']['vip']['price'],
			description: dict['Packages']['vip']['description'],
			features: dict['Packages']['vip']['features'],
			recommended: false,
			color: 'from-amber-500 to-amber-600'
		}
	];

	return (
		<main className='container mx-auto px-5 py-10'>
			<div className='text-center mb-16'>
				<h1 className='text-4xl md:text-6xl font-bold mb-6'>
					{dict['Packages']['title']}
				</h1>
				<p className='text-xl text-base-content/70 max-w-3xl mx-auto'>
					{dict['Packages']['subtitle']}
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
				{packages.map((pkg, index) => (
					<div 
						key={index}
						className={`relative bg-base-200/50 rounded-2xl p-8 border ${pkg.recommended ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-base-content/10'} transition-all hover:shadow-2xl hover:scale-105`}
					>
						{pkg.recommended && (
							<div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
								<span className='bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold'>
									{dict['Packages']['recommended']}
								</span>
							</div>
						)}
						
						<div className='text-center mb-8'>
							<h3 className='text-2xl font-bold mb-2'>{pkg.name}</h3>
							<div className={`text-4xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent mb-2`}>
								{pkg.price}
							</div>
							<p className='text-base-content/60'>{pkg.description}</p>
						</div>

						<ul className='space-y-4 mb-8'>
							{pkg.features.map((feature, idx) => (
								<li key={idx} className='flex items-start gap-3'>
									<div className={`w-5 h-5 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center mt-0.5`}>
										<svg className='w-3 h-3 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
										</svg>
									</div>
									<span className='text-base-content/80'>{feature}</span>
								</li>
							))}
						</ul>

						<button className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${pkg.color} text-white font-semibold hover:shadow-lg transition-all`}>
							{dict['Packages']['cta']}
						</button>
					</div>
				))}
			</div>

			<div className='mt-16 text-center'>
				<div className='bg-base-200/30 rounded-2xl p-8 max-w-4xl mx-auto'>
					<h2 className='text-2xl font-bold mb-4'>{dict['Packages']['contact']['title']}</h2>
					<p className='text-base-content/70 mb-6'>{dict['Packages']['contact']['description']}</p>
					<button className='bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all'>
						{dict['Packages']['contact']['cta']}
					</button>
				</div>
			</div>
		</main>
	);
}