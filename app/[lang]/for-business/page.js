import { getDictionary, defaultLocale } from '@/lib/i18n';
import { SiteConfig } from '@/lib/config/site';
import ForBusinessClient from './ForBusinessClient';

export async function generateMetadata({ params }) {
	const langName = params.lang || defaultLocale;
	const dict = await getDictionary(langName);

	return {
		title: dict['ForBusiness']['title'] + ' - ' + SiteConfig[langName].name,
		description: dict['ForBusiness']['description'],
		keywords: SiteConfig[langName].keywords,
		authors: SiteConfig[langName].authors,
		creator: SiteConfig[langName].creator,
		icons: SiteConfig[langName].icons,
		metadataBase: SiteConfig[langName].metadataBase,
		openGraph: SiteConfig[langName].openGraph,
		twitter: SiteConfig[langName].twitter,
	};
}

export default async function ForBusinessPage({ params: { lang } }) {
    const langName = lang || defaultLocale;
    const dict = await getDictionary(langName);

    return <ForBusinessClient dict={dict.ForBusiness} langName={langName} />;
}