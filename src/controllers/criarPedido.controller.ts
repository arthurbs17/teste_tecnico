import { Request, Response } from "express";
import { PedidoRepository, Pedidos } from "../repositories/pedidos";
import { ClienteRepository } from "../repositories/clientes";
import { StatusCodes } from "http-status-codes";

const criarPedidoController = async (req: Request, res: Response) => {
  try {
    const data = req.validated;
    const { cliente_id } = req.params;
    data.cliente_id = cliente_id;

    const cliente = await new ClienteRepository().pegarClientePorId(
      Number(cliente_id)
    );

    data.cliente = cliente;

    const novoPedido: Pedidos = await new PedidoRepository().cadastrarPedido(
      data
    );

    return res.status(StatusCodes.CREATED).json(novoPedido);
  } catch (e) {
    return res.status(StatusCodes.BAD_REQUEST).json(e);
  }
};

export default criarPedidoController;
