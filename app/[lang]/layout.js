import { locales, defaultLocale } from '@/lib/i18n';
import { SiteConfig } from '@/lib/config/site';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';

export async function generateMetadata({ params }) {
	const paramLang = params?.lang;

	const lang = paramLang && locales.includes(paramLang) ? paramLang : defaultLocale;

	if (!SiteConfig[lang]) {
		return {
			title: SiteConfig[defaultLocale].name,
		};
	}

	return {
		title: SiteConfig[lang].name,
		description: SiteConfig[lang].description,
		keywords: SiteConfig[lang].keywords,
		authors: SiteConfig[lang].authors,
		creator: SiteConfig[lang].creator,
		icons: SiteConfig[lang].icons,
		metadataBase: SiteConfig[lang].metadataBase,
		openGraph: SiteConfig[lang].openGraph,
		twitter: SiteConfig[lang].twitter,
	};
}

export default function LangLayout({ children, params }) {
	const lang = params?.lang || defaultLocale;

	return (
		<>
			<Navbar lang={lang} />
			<div className='px-5'>{children}</div>
			<Footer lang={lang} />
		</>
	);
}
