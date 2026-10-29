import {getDb} from '../mongodb';
export async function findAllServices(){const db=await getDb();return db.collection('services').find({}).sort({order:1}).toArray()}
