import createMiddleware from 'next-intl/middleware';
import {routing} from './routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(fr|en|de)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!api|_next|_vercel|css|.*\\..*).*)',
    // However, match all pathnames within `/users`, optionally with a locale prefix
    '/([\\w-]+)?/users/(.+)'
  ]
};