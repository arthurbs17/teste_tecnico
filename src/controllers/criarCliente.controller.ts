import { Request, Response } from "express";
import { ClienteRepository, Clientes } from "../repositories/clientes";
import { StatusCodes } from "http-status-codes";
import {
  verifyNomeServices,
  titelizeNomeServices,
  verifyCpfServices,
} from "../services";

const criarClienteController = async (req: Request, res: Response) => {
  try {
    const data = req.validated;
    data.nome = verifyNomeServices(data.nome);
    data.nome = titelizeNomeServices(data.nome);
    data.cpf = verifyCpfServices(data.cpf);
    const novoCliente: Clientes = await new ClienteRepository().criarCliente(
      data
    );

    return res.status(StatusCodes.CREATED).json(novoCliente);
  } catch (e) {
    if (e.query) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: e.detail });
    }
    return res.status(StatusCodes.BAD_REQUEST).json({ error: e.message });
  }
};

export default criarClienteController;
