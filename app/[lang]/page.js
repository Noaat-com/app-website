import { i18n, getDictionary, defaultLocale } from '@/lib/i18n';
import Hero from '@/components/home/hero';
import Feature from '@/components/home/feature';
import Testimonial from '@/components/home/testimonial';
import FAQ from '@/components/home/faq';
import CTA from '@/components/home/cta';
import AppPreview from '@/components/home/appPreview';
import HowItWorks from '@/components/home/howItWorks';

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Home({ params: { lang } }) {
	// Ensure we have a valid language, fallback to default
	const currentLang = i18n.locales.includes(lang) ? lang : defaultLocale;
	const locale = await getDictionary(currentLang);

	return (
		<>
			<Hero locale={locale.Hero} CTALocale={locale.CTAButton} />
			<Feature locale={locale.Feature} />
			<AppPreview locale={locale.AppPreview} />
			<HowItWorks locale={locale.HowItWorks} />
			<Testimonial locale={locale.Testimonial} />
			<FAQ locale={locale.Faq} />
			<CTA locale={locale.CTA} CTALocale={locale.CTAButton} />
		</>
	);
}