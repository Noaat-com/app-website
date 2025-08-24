import {reportLanguage} from './lib/function/lang';
import {defaultLocale, locales} from './lib/i18n';
import {NextResponse} from 'next/server';

const rewritePaths = [
  {pattern: /^\/$/, destination: `/${defaultLocale}/`},
  {pattern: /^\/about(\/)?$/, destination: `/${defaultLocale}/about`},
  {pattern: /^\/about-us(\/)?$/, destination: `/${defaultLocale}/about-us`},
  {pattern: /^\/blog(\/)?$/, destination: `/${defaultLocale}/blog`},
  {pattern: /^\/blog\/([^\/]+)(\/)?$/, destination: `/${defaultLocale}/blog/$1`},
  {pattern: /^\/our-packages(\/)?$/, destination: `/${defaultLocale}/our-packages`},
  {pattern: /^\/contact-us(\/)?$/, destination: `/${defaultLocale}/contact-us`},
  {pattern: /^\/faqs(\/)?$/, destination: `/${defaultLocale}/faqs`},
  {pattern: /^\/terms-and-conditions(\/)?$/, destination: `/${defaultLocale}/terms-and-conditions`},
  {pattern: /^\/privacy-policy(\/)?$/, destination: `/${defaultLocale}/privacy-policy`},
  {pattern: /^\/why-noaat(\/)?$/, destination: `/${defaultLocale}/why-noaat`},
  {pattern: /^\/how-cashback-works(\/)?$/, destination: `/${defaultLocale}/how-cashback-works`},
  {pattern: /^\/coupons-offers(\/)?$/, destination: `/${defaultLocale}/coupons-offers`},
];

export function middleware(request) {
  const {pathname} = request.nextUrl;

  const lang = reportLanguage(pathname);
  request.headers.set('x-pathname', pathname);
  request.headers.set('x-language-directory', lang);

  // Check if path already has a locale
  const pathnameHasLocale = locales.some((locale) =>
    pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Handle rewrite paths (for paths without locale)
  if (!pathnameHasLocale) {
    for (const {pattern, destination} of rewritePaths) {
      const match = pathname.match(pattern);
      if (match) {
        const newPath = destination.replace('$1', match[1] || '');
        request.nextUrl.pathname = newPath;
        return NextResponse.rewrite(request.nextUrl);
      }
    }
  }

  // If path already has locale, continue normally
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // For any other path without locale, redirect to default locale
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next)(?!.*\\.(?:ico|png|gif|svg|jpg|jpeg|xml|txt|mp4)$)(?!/api).*)'],
};
