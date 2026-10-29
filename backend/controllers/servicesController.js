import { NextResponse } from 'next/server';import { getServices } from '../services/servicesService';
export async function listServices(){try{return NextResponse.json({services:await getServices()})}catch(e){return NextResponse.json({error:'Database unavailable.'},{status:503})}}
