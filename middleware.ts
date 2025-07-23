import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	const response = NextResponse.next();
	
	// Get the pathname from the request
	const { pathname } = request.nextUrl;
	
	// Handle ISR pages with proper Cache-Control headers
	if (pathname.startsWith('/blog/')) {
		// Blog posts with 1 hour revalidation
		response.headers.set(
			'Cache-Control',
			'public, max-age=3600, stale-while-revalidate=7200'
		);
	} else if (pathname.startsWith('/blog')) {
		// Blog index with 1 minute revalidation
		response.headers.set(
			'Cache-Control',
			'public, max-age=60, stale-while-revalidate=300'
		);
	} else if (pathname.startsWith('/docs/')) {
		// Documentation pages with 10 minute revalidation
		response.headers.set(
			'Cache-Control',
			'public, max-age=600, stale-while-revalidate=3600'
		);
	} else if (pathname === '/') {
		// Homepage with 5 minute revalidation
		response.headers.set(
			'Cache-Control',
			'public, max-age=300, stale-while-revalidate=1800'
		);
	} else {
		// Default for other pages
		response.headers.set(
			'Cache-Control',
			'public, max-age=0, must-revalidate'
		);
	}
	
	// Add Vary header for proper caching
	response.headers.set('Vary', 'Accept-Encoding');
	
	return response;
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
};