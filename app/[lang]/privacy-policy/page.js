import { getDictionary, defaultLocale } from '@/lib/i18n';
import { SiteConfig } from '@/lib/config/site';

export async function generateMetadata({ params }) {
	const langName = params.lang || defaultLocale;
	const dict = await getDictionary(langName);

	return {
		title: dict['Privacy']['title'] + ' - ' + SiteConfig[langName].name,
		description: dict['Privacy']['description'],
		keywords: SiteConfig[langName].keywords,
		authors: SiteConfig[langName].authors,
		creator: SiteConfig[langName].creator,
		icons: SiteConfig[langName].icons,
		metadataBase: SiteConfig[langName].metadataBase,
		openGraph: SiteConfig[langName].openGraph,
		twitter: SiteConfig[langName].twitter,
	};
}

export default async function PrivacyPage({ params }) {
	const langName = params.lang || defaultLocale;
	const dict = await getDictionary(langName);

	return (
		<main className={`container mx-auto px-5 py-10 ${langName === 'ar' ? 'rtl' : 'ltr'}`} dir={langName === 'ar' ? 'rtl' : 'ltr'}>
			<div className='max-w-4xl mx-auto'>
				<div className='text-center mb-16'>
					<h1 className='text-4xl md:text-6xl font-bold mb-6'>
						{dict['Privacy']['title']}
					</h1>
					<p className='text-xl text-base-content/70'>
						{dict['Privacy']['subtitle']}
					</p>
					<p className='text-sm text-base-content/50 mt-4'>
						{dict['Privacy']['lastUpdated']}
					</p>
				</div>

				<div className='prose prose-lg max-w-none'>
					{dict['Privacy']['sections'].map((section, index) => (
						<section key={index} className='mb-8'>
							<h2 className='text-2xl font-bold mb-4 text-base-content'>
								{section.title}
							</h2>
							<div className='text-base-content/80 space-y-4'>
								{section.content.map((paragraph, pIndex) => (
									<p key={pIndex}>{paragraph}</p>
								))}
							</div>
						</section>
					))}
				</div>

				<div className='mt-16 text-center bg-base-200/30 rounded-2xl p-8'>
					<h3 className='text-2xl font-bold mb-4'>
						{dict['Privacy']['contact']['title']}
					</h3>
					<p className='text-base-content/70 mb-6'>
						{dict['Privacy']['contact']['description']}
					</p>
					<button className='bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all'>
						{dict['Privacy']['contact']['cta']}
					</button>
				</div>
			</div>
		</main>
	);
}