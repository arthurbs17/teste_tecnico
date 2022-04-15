import { PedidosStatusRepository } from "../repositories/pedidosStatus";

const popularPedidosStatusController = async () => {
  try {
    const status = await new PedidosStatusRepository().visualizarStatus();
    if (status.length === 0) {
      const statusSolicitado = { descricao: "Solicitado" };
      const statusConcluido = { descricao: "Concluído" };
      const statusCancelado = { descricao: "Cancelado" };
      await new PedidosStatusRepository().criarStatus(statusSolicitado);
      await new PedidosStatusRepository().criarStatus(statusConcluido);
      await new PedidosStatusRepository().criarStatus(statusCancelado);
    }
  } catch (e) {
    console.log(e);
  }
};

export default popularPedidosStatusController;
