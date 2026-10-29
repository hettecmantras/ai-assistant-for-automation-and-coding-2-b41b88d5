import { createContact } from '../../../../backend/controllers/contactController';
export async function POST(request){return createContact(request)}