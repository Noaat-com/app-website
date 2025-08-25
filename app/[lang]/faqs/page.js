import { getDictionary, defaultLocale } from '@/lib/i18n';
import { SiteConfig } from '@/lib/config/site';
import FAQSection from '@/components/faq/faqSection';

export async function generateMetadata({ params }) {
	const langName = params.lang || defaultLocale;
	const dict = await getDictionary(langName);

	return {
		title: dict['FAQ']['title'] + ' - ' + SiteConfig[langName].name,
		description: dict['FAQ']['description'],
		keywords: SiteConfig[langName].keywords,
		authors: SiteConfig[langName].authors,
		creator: SiteConfig[langName].creator,
		icons: SiteConfig[langName].icons,
		metadataBase: SiteConfig[langName].metadataBase,
		openGraph: SiteConfig[langName].openGraph,
		twitter: SiteConfig[langName].twitter,
	};
}

export default async function FAQPage({ params }) {
	const langName = params.lang || defaultLocale;
	const dict = await getDictionary(langName);

	return (
		<main className={`container mx-auto px-5 py-10 ${langName === 'ar' ? 'rtl' : 'ltr'}`} dir={langName === 'ar' ? 'rtl' : 'ltr'}>
			<div className='text-center mb-16'>
				<h1 className='text-4xl md:text-6xl font-bold mb-6'>
					{dict['FAQ']['title']}
				</h1>
				<p className='text-xl text-base-content/70 max-w-3xl mx-auto'>
					{dict['FAQ']['subtitle']}
				</p>
			</div>

			<div className='max-w-4xl mx-auto'>
				{/* Partners FAQs */}
				<FAQSection 
					title={dict['FAQ']['partners']['title']}
					items={dict['FAQ']['partners']['items']}
				/>

				{/* Customers FAQs */}
				<FAQSection 
					title={dict['FAQ']['customers']['title']}
					items={dict['FAQ']['customers']['items']}
				/>

				{/* Contact CTA */}
				<div className='text-center bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8'>
					<h3 className='text-2xl font-bold mb-4'>
						{dict['FAQ']['contact']['title']}
					</h3>
					<p className='text-base-content/70 mb-6'>
						{dict['FAQ']['contact']['description']}
					</p>
					<button className='bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all'>
						{dict['FAQ']['contact']['cta']}
					</button>
				</div>
			</div>
		</main>
	);
}