import { createOrder } from '../../../../backend/controllers/orderController';
export async function POST(request){return createOrder(request)}