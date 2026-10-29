import {getDb} from '../mongodb';
export async function insertContact(doc){const db=await getDb();const result=await db.collection('contacts').insertOne(doc);return {...doc,_id:result.insertedId}}
