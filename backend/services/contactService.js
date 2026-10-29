import {insertContact} from '../../database/models/contacts';
export async function saveContact(input){return insertContact({name:String(input.name).trim(),email:String(input.email).trim().toLowerCase(),message:String(input.message).trim(),createdAt:new Date()})}
