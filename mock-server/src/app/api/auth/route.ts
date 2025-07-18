import { NextResponse } from "next/server";


export async function GET(request: Request) {

  console.log('HIT /api/auth');
  console.log(request.headers);

  const clientBaseUri = process.env.PAI_CLIENT_BASE_URI;
  console.log({clientBaseUri});


  const response = NextResponse.json({ clientUri: clientBaseUri }, { status: 200 });
  return response;
}