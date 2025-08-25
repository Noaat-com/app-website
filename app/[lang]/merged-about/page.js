import { getDictionary, defaultLocale } from '@/lib/i18n';
import { SiteConfig } from '@/lib/config/site';
import Link from 'next/link';
import PricingSection from '@/components/home/pricing';

export async function generateMetadata({ params }) {
	const langName = params.lang || defaultLocale;
	const dict = await getDictionary(langName);
	const mergedAbout = dict['MergedAbout'] || dict['About'];

	return {
		title: (mergedAbout?.title || 'About') + ' - ' + SiteConfig[langName].name,
		description: mergedAbout?.description || 'Learn about Noaat',
		keywords: SiteConfig[langName].keywords,
		authors: SiteConfig[langName].authors,
		creator: SiteConfig[langName].creator,
		icons: SiteConfig[langName].icons,
		metadataBase: SiteConfig[langName].metadataBase,
		openGraph: SiteConfig[langName].openGraph,
		twitter: SiteConfig[langName].twitter,
	};
}

export default async function MergedAboutPage({ params }) {
	const langName = params.lang || defaultLocale;
	const dict = await getDictionary(langName);
	const isRTL = langName === 'ar';
	
	// Get content from merged about section only
	const mergedAbout = dict['MergedAbout'];

	if (!mergedAbout) {
		return (
			<main className={`container mx-auto px-5 py-10 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
				<div className='max-w-6xl mx-auto'>
					<h1 className='text-4xl font-bold text-center'>Loading...</h1>
				</div>
			</main>
		);
	}

	return (
		<main className={`container mx-auto px-5 py-10 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
			<div className='max-w-6xl mx-auto'>
				{/* Hero Section */}
				<div className='text-center mb-16'>
					<h1 className='text-4xl md:text-6xl font-bold mb-6'>
						{mergedAbout?.hero?.title || 'About Noaat'}
					</h1>
					<p className='text-xl text-base-content/70 max-w-3xl mx-auto'>
						{mergedAbout?.hero?.subtitle}
					</p>
				</div>

				{/* Story Section from MergedAbout */}
				{mergedAbout?.story && (
					<div className='mb-16'>
						<h2 className='text-3xl font-bold mb-8 text-center'>
							{mergedAbout.story.title}
						</h2>
						<div className='prose prose-lg max-w-4xl mx-auto text-base-content/80'>
							{mergedAbout.story.content?.map((paragraph, index) => (
								<p key={index} className='mb-6 text-lg leading-relaxed text-base-content'>
									{paragraph}
								</p>
							))}
						</div>
					</div>
				)}

				{/* Services Section */}
				{mergedAbout?.services && (
					<div className='mb-16'>
						<h2 className='text-3xl font-bold mb-12 text-center'>
							{mergedAbout.services.title}
						</h2>
						<div className='grid md:grid-cols-2 gap-8'>
							{mergedAbout.services.items?.map((service, index) => (
								<div key={index} className='bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50'>
									<h4 className='text-xl font-bold mb-4 text-base-content'>{service.title}</h4>
									<p className='text-base-content/80 leading-relaxed'>{service.description}</p>
								</div>
							))}
						</div>
					</div>
				)}

				{/* Why Choose Us Section */}
				{mergedAbout?.whyChoose && (
					<div className='mb-16'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl font-bold mb-4 text-base-content'>
								{mergedAbout.whyChoose.title}
							</h2>
							<p className='text-xl text-base-content/70 max-w-4xl mx-auto'>
								{mergedAbout.whyChoose.description}
							</p>
						</div>
						<div className='grid md:grid-cols-3 gap-8'>
							{mergedAbout.whyChoose.benefits?.map((benefit, index) => (
								<div key={index} className='text-center bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-900/10 dark:to-teal-900/10 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50'>
									<h4 className='text-xl font-bold mb-3 text-base-content'>{benefit.title}</h4>
									<p className='text-base-content/70 leading-relaxed'>{benefit.description}</p>
								</div>
							))}
						</div>
					</div>
				)}





				{/* Additional merged content sections */}
				{mergedAbout?.forCustomers && (
					<div className='mb-16'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl font-bold mb-4'>
								{mergedAbout.forCustomers.title}
							</h2>
							<p className='text-xl text-base-content/70 mb-2'>
								{mergedAbout.forCustomers.subtitle}
							</p>
							<p className='text-base-content/80 max-w-3xl mx-auto'>
								{mergedAbout.forCustomers.description}
							</p>
						</div>
						<div className='grid md:grid-cols-3 gap-8'>
							{mergedAbout.forCustomers.features?.map((feature, index) => (
								<div key={index} className='bg-base-200/30 rounded-2xl p-6'>
									<h4 className='text-xl font-bold mb-3'>{feature.title}</h4>
									<p className='text-base-content/70'>{feature.description}</p>
								</div>
							))}
						</div>
					</div>
				)}

				{/* Technology Stack */}
				{mergedAbout?.technology && (
					<div className='mb-16'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl font-bold mb-6'>
								{mergedAbout.technology.title}
							</h2>
							<div className='max-w-5xl mx-auto mb-8'>
								<p className='text-lg text-base-content/80 mb-6 leading-relaxed'>
									{mergedAbout.technology.description}
								</p>
								<p className='text-base-content/70 leading-relaxed'>
									{mergedAbout.technology.subtitle}
								</p>
							</div>
						</div>
						<div className='grid md:grid-cols-5 gap-6'>
							{mergedAbout.technology.stack?.map((tech, index) => (
								<div key={index} className='bg-gradient-to-br from-gray-50/50 to-gray-100/50 dark:from-gray-800/30 dark:to-gray-700/30 rounded-xl p-6 text-center border border-gray-200/50 dark:border-gray-600/50'>
									<p className='text-base-content font-semibold'>{tech}</p>
								</div>
							))}
						</div>
					</div>
				)}

				{/* Packages Section */}
				{mergedAbout?.packages && (
					<PricingSection 
						locale={{
							h2: mergedAbout.packages.title,
							h3: mergedAbout.packages.subtitle,
							description: mergedAbout.packages.description || dict['Packages']?.description
						}}
						langName={langName}
					/>
				)}

				{/* Final CTA Section */}
				<div className='text-center bg-base-200/30 rounded-2xl p-8'>
					<h3 className='text-2xl font-bold mb-4'>
						{mergedAbout?.cta?.title || 'Ready to Get Started?'}
					</h3>
					<p className='text-base-content/70 mb-6 max-w-2xl mx-auto'>
						{mergedAbout?.cta?.description || 'Join thousands of satisfied customers and businesses'}
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link href='/contact-us' className='bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all inline-block'>
							{mergedAbout?.cta?.businessBtn || 'Join as Partner'}
						</Link>
						<Link href='/contact-us' className='bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all inline-block'>
							{mergedAbout?.cta?.customerBtn || 'Download App'}
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}