import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { getDictionary, defaultLocale } from '@/lib/i18n';
import { SiteConfig } from '@/lib/config/site';
import HowItWorksClient from './HowItWorksClient';

export async function generateMetadata({ params }) {
	const langName = params.lang || defaultLocale;
	const dict = await getDictionary(langName);

	return {
		title: dict['HowItWorks']['title'] + ' - ' + SiteConfig[langName].name,
		description: dict['HowItWorks']['description'],
		keywords: SiteConfig[langName].keywords,
		authors: SiteConfig[langName].authors,
		creator: SiteConfig[langName].creator,
		icons: SiteConfig[langName].icons,
		metadataBase: SiteConfig[langName].metadataBase,
		openGraph: SiteConfig[langName].openGraph,
		twitter: SiteConfig[langName].twitter,
	};
}

export default async function HowItWorksPage({ params: { lang } }) {
    const langName = lang || defaultLocale;
    const dict = await getDictionary(langName);

    return <HowItWorksClient dict={dict.HowItWorks} langName={langName} />;
}