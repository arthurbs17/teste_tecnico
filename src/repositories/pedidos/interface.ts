import { PedidosStatus } from "../../entities/PedidosStatus";
import { Clientes } from "../clientes";

interface PedidoInterface {
  id: number;
  produto: string;
  valor: number;
  data: Date;
  ativo: number;
  cliente: Clientes;
  pedido_status_id: number;
}

interface PedidoRepo {
  cadastrarPedido: (pedido: PedidoInterface) => Promise<PedidoInterface>;
  visualizarPedido: () => Promise<PedidoInterface[]>;
}

export { PedidoInterface, PedidoRepo };
