import { Request, Response } from "express";
import { ClienteRepository } from "../repositories/clientes";
import { StatusCodes } from "http-status-codes";

const visualizarClientesController = async (req: Request, res: Response) => {
  try {
    const clientes = await new ClienteRepository().visualizarClientes();

    return res.status(StatusCodes.OK).json(clientes);
  } catch (e) {
    return res.status(StatusCodes.BAD_REQUEST).json(e);
  }
};

export default visualizarClientesController;
