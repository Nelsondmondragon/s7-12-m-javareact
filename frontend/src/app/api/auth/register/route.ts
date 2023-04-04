import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ msg: "Hello !'m in the register api!" });
}
