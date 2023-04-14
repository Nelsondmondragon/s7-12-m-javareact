import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const userToken = await request.cookies.get('token')?.value;
  const user = await request.cookies.get('user')?.value;

  console.log(' llego desde ', request.nextUrl.pathname);
  if (userToken) {
    if (user) {
      const userData = JSON.parse(user);
      if (!userData.firstName) {
        return NextResponse.redirect(new URL('/updateuser', request.url));
      }
    }
  } else {
    if (request.nextUrl.pathname === '/pay') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  return NextResponse.redirect(new URL('/home', request.url));
}
// See "Matching Paths" below to learn more
/**
 *  Hay que definir cuales son las rutas protegidas
 *  si esta logeado y no registrado lo debe de enviar por defecto a completar datos
 */
export const config = {
  matcher: ['/newregister/:path*', '/pay/:path*'],
};
