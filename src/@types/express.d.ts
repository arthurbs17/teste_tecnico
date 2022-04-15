import { Clientes } from "../entities/Clientes";

declare global {
  namespace Express {
    interface Request {
      validated: any;
    }
  }
}
