import { Request, Response } from "express";
import { PedidoRepository, Pedidos } from "../repositories/pedidos";
import { StatusCodes } from "http-status-codes";

const criarPedidoController = async (req: Request, res: Response) => {
  try {
    const data = req.validated;
    const novoPedido: Pedidos = await new PedidoRepository().cadastrarPedido(
      data
    );

    return res.status(StatusCodes.CREATED).json(novoPedido);
  } catch (e) {
    return res.status(StatusCodes.BAD_REQUEST).json(e);
  }
};

export default criarPedidoController;
