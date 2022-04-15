import { PedidosStatus } from "../../entities/PedidosStatus";

interface PedidosStatusInterface {
  id: number;
  descricao: string;
}

interface PedidosStatusRepo {
  criarStatus: (
    status: PedidosStatusInterface
  ) => Promise<PedidosStatusInterface>;
  visualizarStatus: () => Promise<PedidosStatusInterface[]>;
}

export { PedidosStatusInterface, PedidosStatusRepo };
