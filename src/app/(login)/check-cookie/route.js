
import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('localhost:3100/paciente/obtenerTodos') 
  const data = await res.json();
  return NextResponse.json({ data })
 
}

