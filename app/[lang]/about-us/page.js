import { getDictionary, defaultLocale } from '@/lib/i18n';
import { SiteConfig } from '@/lib/config/site';

export async function generateMetadata({ params }) {
	const langName = params.lang || defaultLocale;
	const dict = await getDictionary(langName);

	return {
		title: dict['About']['title'] + ' - ' + SiteConfig[langName].name,
		description: dict['About']['description'],
		keywords: SiteConfig[langName].keywords,
		authors: SiteConfig[langName].authors,
		creator: SiteConfig[langName].creator,
		icons: SiteConfig[langName].icons,
		metadataBase: SiteConfig[langName].metadataBase,
		openGraph: SiteConfig[langName].openGraph,
		twitter: SiteConfig[langName].twitter,
	};
}

export default async function AboutPage({ params }) {
	const langName = params.lang || defaultLocale;
	const dict = await getDictionary(langName);

	return (
		<main className={`container mx-auto px-5 py-10 ${langName === 'ar' ? 'rtl' : 'ltr'}`} dir={langName === 'ar' ? 'rtl' : 'ltr'}>
			<div className='max-w-6xl mx-auto'>
				{/* Hero Section */}
				<div className='text-center mb-16'>
					<h1 className='text-4xl md:text-6xl font-bold mb-6'>
						{dict['About']['title']}
					</h1>
					<p className='text-xl text-base-content/70 max-w-3xl mx-auto'>
						{dict['About']['subtitle']}
					</p>
				</div>

				{/* Story Section */}
				<div className='mb-16'>
					<h2 className='text-3xl font-bold mb-8 text-center'>
						{dict['About']['story']['title']}
					</h2>
					<div className='prose prose-lg max-w-4xl mx-auto text-base-content/80'>
						{dict['About']['story']['content'].map((paragraph, index) => (
							<p key={index} className='mb-6'>
								{paragraph}
							</p>
						))}
					</div>
				</div>

				{/* Mission & Vision */}
				<div className='grid md:grid-cols-2 gap-12 mb-16'>
					<div className='bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8'>
						<h3 className='text-2xl font-bold mb-4 flex items-center gap-3'>
							<span className='text-3xl'>🎯</span>
							{dict['About']['mission']['title']}
						</h3>
						<p className='text-base-content/80'>
							{dict['About']['mission']['description']}
						</p>
					</div>
					<div className='bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl p-8'>
						<h3 className='text-2xl font-bold mb-4 flex items-center gap-3'>
							<span className='text-3xl'>🔮</span>
							{dict['About']['vision']['title']}
						</h3>
						<p className='text-base-content/80'>
							{dict['About']['vision']['description']}
						</p>
					</div>
				</div>

				{/* Values */}
				<div className='mb-16'>
					<h2 className='text-3xl font-bold mb-12 text-center'>
						{dict['About']['values']['title']}
					</h2>
					<div className='grid md:grid-cols-3 gap-8'>
						{dict['About']['values']['items'].map((value, index) => (
							<div key={index} className='text-center bg-base-200/30 rounded-2xl p-6'>
								<div className='text-4xl mb-4'>{value.icon}</div>
								<h4 className='text-xl font-bold mb-3'>{value.title}</h4>
								<p className='text-base-content/70'>{value.description}</p>
							</div>
						))}
					</div>
				</div>

				{/* Stats */}
				<div className='bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl p-8 mb-16 text-white'>
					<h2 className='text-3xl font-bold mb-8 text-center'>
						{dict['About']['stats']['title']}
					</h2>
					<div className='grid md:grid-cols-3 gap-8 text-center'>
						{dict['About']['stats']['items'].map((stat, index) => (
							<div key={index}>
								<div className='text-4xl font-bold mb-2'>{stat.number}</div>
								<p className='text-purple-100'>{stat.label}</p>
							</div>
						))}
					</div>
				</div>

				{/* CTA Section */}
				<div className='text-center bg-base-200/30 rounded-2xl p-8'>
					<h3 className='text-2xl font-bold mb-4'>
						{dict['About']['cta']['title']}
					</h3>
					<p className='text-base-content/70 mb-6 max-w-2xl mx-auto'>
						{dict['About']['cta']['description']}
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<button className='bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all'>
							{dict['About']['cta']['partnersBtn']}
						</button>
						<button className='bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all'>
							{dict['About']['cta']['downloadBtn']}
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}