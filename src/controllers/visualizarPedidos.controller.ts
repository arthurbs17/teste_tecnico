import { Request, Response } from "express";
import { PedidoRepository } from "../repositories/pedidos";
import { StatusCodes } from "http-status-codes";

const visualizarPedidosController = async (req: Request, res: Response) => {
  try {
    const pedidos = await new PedidoRepository().visualizarPedido();

    return res.status(StatusCodes.OK).json(pedidos);
  } catch (e) {
    return res.status(StatusCodes.BAD_REQUEST).json(e);
  }
};

export default visualizarPedidosController;
