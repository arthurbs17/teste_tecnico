import { Router } from "express";
import validateShape from "./middlewares/validate.shape";
import {
  criarClienteController,
  visualizarClientesController,
  criarPedidoController,
  visualizarPedidosController,
  enviarImagemController,
} from "./controllers";
import { clienteShape, pedidoShape } from "./shapes";
import multer from "multer";
import multerConfig from "./configs/multer";

const route = Router();

route.post("/clientes", validateShape(clienteShape), criarClienteController);
route.post(
  "/pedidos/:cliente_id",
  validateShape(pedidoShape),
  criarPedidoController
);
route.post(
  "/imagem/pedido/:pedido_id",
  multer(multerConfig).single("file"),
  enviarImagemController
);

route.get("/clientes", visualizarClientesController);
route.get("/pedidos", visualizarPedidosController);

export default route;
