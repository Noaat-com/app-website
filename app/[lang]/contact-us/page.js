import { getDictionary, defaultLocale } from '@/lib/i18n';
import { SiteConfig } from '@/lib/config/site';

export async function generateMetadata({ params }) {
	const langName = params.lang || defaultLocale;
	const dict = await getDictionary(langName);

	return {
		title: dict['Contact']['title'] + ' - ' + SiteConfig[langName].name,
		description: dict['Contact']['description'],
		keywords: SiteConfig[langName].keywords,
		authors: SiteConfig[langName].authors,
		creator: SiteConfig[langName].creator,
		icons: SiteConfig[langName].icons,
		metadataBase: SiteConfig[langName].metadataBase,
		openGraph: SiteConfig[langName].openGraph,
		twitter: SiteConfig[langName].twitter,
	};
}

export default async function ContactPage({ params }) {
	const langName = params.lang || defaultLocale;
	const dict = await getDictionary(langName);

	return (
		<main className='container mx-auto px-5 py-10'>
			<div className='text-center mb-16'>
				<h1 className='text-4xl md:text-6xl font-bold mb-6'>
					{dict['Contact']['title']}
				</h1>
				<p className='text-xl text-base-content/70 max-w-3xl mx-auto'>
					{dict['Contact']['subtitle']}
				</p>
			</div>

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
				{/* Contact Information */}
				<div className='space-y-8'>
					<div className='bg-base-200/30 rounded-2xl p-8'>
						<h2 className='text-2xl font-bold mb-6'>{dict['Contact']['info']['title']}</h2>
						
						<div className='space-y-6'>
							<div className='flex items-start gap-4'>
								<div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center'>
									<svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
									</svg>
								</div>
								<div>
									<h3 className='font-semibold mb-1'>{dict['Contact']['info']['email']['title']}</h3>
									<p className='text-base-content/70'>{dict['Contact']['info']['email']['value']}</p>
								</div>
							</div>

							<div className='flex items-start gap-4'>
								<div className='w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center'>
									<svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
									</svg>
								</div>
								<div>
									<h3 className='font-semibold mb-1'>{dict['Contact']['info']['phone']['title']}</h3>
									<p className='text-base-content/70'>{dict['Contact']['info']['phone']['value']}</p>
								</div>
							</div>

							<div className='flex items-start gap-4'>
								<div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center'>
									<svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
									</svg>
								</div>
								<div>
									<h3 className='font-semibold mb-1'>{dict['Contact']['info']['hours']['title']}</h3>
									<p className='text-base-content/70'>{dict['Contact']['info']['hours']['value']}</p>
								</div>
							</div>
						</div>
					</div>

					<div className='bg-base-200/30 rounded-2xl p-8'>
						<h2 className='text-2xl font-bold mb-6'>{dict['Contact']['business']['title']}</h2>
						<p className='text-base-content/70 mb-6'>{dict['Contact']['business']['description']}</p>
						<button className='bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all'>
							{dict['Contact']['business']['cta']}
						</button>
					</div>
				</div>

				{/* Contact Form */}
				<div className='bg-base-200/30 rounded-2xl p-8'>
					<h2 className='text-2xl font-bold mb-6'>{dict['Contact']['form']['title']}</h2>
					
					<form className='space-y-6'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div>
								<label className='block text-sm font-medium mb-2'>{dict['Contact']['form']['name']}</label>
								<input 
									type='text' 
									className='w-full px-4 py-3 rounded-lg border border-base-content/10 bg-base-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all'
									placeholder={dict['Contact']['form']['namePlaceholder']}
								/>
							</div>
							<div>
								<label className='block text-sm font-medium mb-2'>{dict['Contact']['form']['email']}</label>
								<input 
									type='email' 
									className='w-full px-4 py-3 rounded-lg border border-base-content/10 bg-base-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all'
									placeholder={dict['Contact']['form']['emailPlaceholder']}
								/>
							</div>
						</div>
						
						<div>
							<label className='block text-sm font-medium mb-2'>{dict['Contact']['form']['subject']}</label>
							<input 
								type='text' 
								className='w-full px-4 py-3 rounded-lg border border-base-content/10 bg-base-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all'
								placeholder={dict['Contact']['form']['subjectPlaceholder']}
							/>
						</div>
						
						<div>
							<label className='block text-sm font-medium mb-2'>{dict['Contact']['form']['message']}</label>
							<textarea 
								rows={6}
								className='w-full px-4 py-3 rounded-lg border border-base-content/10 bg-base-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-vertical'
								placeholder={dict['Contact']['form']['messagePlaceholder']}
							></textarea>
						</div>
						
						<button 
							type='submit'
							className='w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all'
						>
							{dict['Contact']['form']['submit']}
						</button>
					</form>
				</div>
			</div>
		</main>
	);
}