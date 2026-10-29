import { listServices } from '../../../../backend/controllers/servicesController';
export async function GET(request){return listServices(request)}