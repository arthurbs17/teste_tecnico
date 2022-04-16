import { Request, Response } from "express";
import {
  PedidosImagensRepository,
  PedidosImagensInterface,
} from "../repositories/pedidosImagens";
import { StatusCodes } from "http-status-codes";

const enviarImagemController = async (req: Request, res: Response) => {
  try {
    const data = req.file;
    const { pedido_id } = req.params;

    const imagem: PedidosImagensInterface = {
      imagem: data.originalname,
      capa: data.originalname,
      pedido_id: Number(pedido_id),
    };

    const newImagem = await new PedidosImagensRepository().enviarImagem(imagem);

    return res.status(StatusCodes.CREATED).json(newImagem);
  } catch (e) {
    return res.status(StatusCodes.BAD_REQUEST).json(e);
  }
};

export default enviarImagemController;
