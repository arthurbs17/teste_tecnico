import { Request, Response } from "express";
import { ClienteRepository, Clientes } from "../repositories/clientes";
import { StatusCodes } from "http-status-codes";

const criarClienteController = async (req: Request, res: Response) => {
  try {
    const data = req.validated;
    const novoCliente: Clientes = await new ClienteRepository().criarCliente(
      data
    );

    return res.status(StatusCodes.CREATED).json(novoCliente);
  } catch (e) {
    return res.status(StatusCodes.BAD_REQUEST).json(e);
  }
};

export default criarClienteController;
