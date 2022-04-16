import { Pedidos } from "../../entities/Pedidos";

interface PedidosImagensInterface {
  imagem: string;
  capa: string;
  pedido_id: number;
}

interface PedidosImagensRepo {
  enviarImagem: (
    imagem: PedidosImagensInterface
  ) => Promise<PedidosImagensInterface>;
}

export { PedidosImagensInterface, PedidosImagensRepo };
