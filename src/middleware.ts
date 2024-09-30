import { NextResponse, NextRequest } from 'next/server';

const privatePaths = [];
const authPaths = [];

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const sessionToken = request.cookies.get('access_token')?.value;
  return NextResponse.next();
}
