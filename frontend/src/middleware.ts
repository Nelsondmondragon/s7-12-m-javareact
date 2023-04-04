import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const userToken = await request.cookies.get('token')?.value;
  if (!userToken) {
    return NextResponse.redirect(new URL('/', request.url));
  } else {
    return NextResponse.next();
  }
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/booking/:path*',
};
