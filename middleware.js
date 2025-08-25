import {reportLanguage} from './lib/function/lang';
import {defaultLocale, locales} from './lib/i18n';
import {NextResponse} from 'next/server';

// Define paths that should be rewritten to include language prefix
const rewritePaths = [
  {pattern: /^\/$/, destination: `/ar/`},
  {pattern: /^\/about(\/)?$/, destination: `/ar/about`},
  {pattern: /^\/about-us(\/)?$/, destination: `/ar/about-us`},
  {pattern: /^\/blog(\/)?$/, destination: `/ar/blog`},
  {pattern: /^\/blog\/([^\/]+)(\/)?$/, destination: `/ar/blog/$1`},
  {pattern: /^\/for-business(\/)?$/, destination: `/ar/for-business`},
  {pattern: /^\/our-packages(\/)?$/, destination: `/ar/for-business`},
  {pattern: /^\/contact-us(\/)?$/, destination: `/ar/contact-us`},
  {pattern: /^\/faqs(\/)?$/, destination: `/ar/faqs`},
  {pattern: /^\/terms-and-conditions(\/)?$/, destination: `/ar/terms-and-conditions`},
  {pattern: /^\/privacy-policy(\/)?$/, destination: `/ar/privacy-policy`},
  {pattern: /^\/how-it-works(\/)?$/, destination: `/ar/how-it-works`},
];

export function middleware(request) {
  const {pathname} = request.nextUrl;

  const lang = reportLanguage(pathname);
  request.headers.set('x-pathname', pathname);
  request.headers.set('x-language-directory', lang);

  // Check if path starts with /en/ (English routes)
  if (pathname.startsWith('/en/') || pathname === '/en') {
    return NextResponse.next();
  }

  // Check if path starts with /ar/ (Arabic routes) - redirect to remove /ar prefix
  if (pathname.startsWith('/ar/')) {
    const newPath = pathname.replace('/ar', '') || '/';
    request.nextUrl.pathname = newPath;
    return NextResponse.redirect(request.nextUrl);
  }

  // Check if it's exactly /ar
  if (pathname === '/ar') {
    request.nextUrl.pathname = '/';
    return NextResponse.redirect(request.nextUrl);
  }

  // Handle rewrite paths (routes without language prefix - default to Arabic)
  for (const {pattern, destination} of rewritePaths) {
    const match = pathname.match(pattern);
    if (match) {
      const newPath = destination.replace('$1', match[1] || '');
      request.nextUrl.pathname = newPath;
      return NextResponse.rewrite(request.nextUrl);
    }
  }

  // For any other path without locale prefix, assume it's Arabic
  request.nextUrl.pathname = `/ar${pathname}`;
  return NextResponse.rewrite(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next)(?!.*\\.(?:ico|png|gif|svg|jpg|jpeg|xml|txt|mp4)$)(?!/api).*)'],
};
