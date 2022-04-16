import { Request, Response } from "express";
import { PedidoRepository } from "../repositories/pedidos";
import { StatusCodes } from "http-status-codes";
import { Parser as CsvParser } from "json2csv";

const exportCSVFileController = async (req: Request, res: Response) => {
  const pedidos = await new PedidoRepository().visualizarPedido();

  const historicoPedidos = [];

  pedidos.forEach((pedido) => {
    const { id, produto, valor, data, ativo, cliente_id, pedido_status_id } =
      pedido;
    historicoPedidos.push({
      id,
      produto,
      valor,
      data,
      ativo,
      cliente_id,
      pedido_status_id,
    });
  });

  const fields = [
    "id",
    "produto",
    "valor",
    "data",
    "ativo",
    "cliente_id",
    "pedido_status_id",
  ];

  const csvParse = new CsvParser({ fields });
  const csvData = csvParse.parse(historicoPedidos);

  res.setHeader("Content-Type", "text/csv");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=historicoPedidos.csv"
  );
  return res.status(StatusCodes.OK).end(csvData);
};

export default exportCSVFileController;
