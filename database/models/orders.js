import {getDb} from '../mongodb';
export async function insertOrder(doc){const db=await getDb();const result=await db.collection('orders').insertOne(doc);return {...doc,_id:result.insertedId.toString()}}
