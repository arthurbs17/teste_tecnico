interface PedidosStatusInterface {
  descricao: string;
}

interface PedidosStatusRepo {
  criarStatus: (
    status: PedidosStatusInterface
  ) => Promise<PedidosStatusInterface>;
  visualizarStatus: () => Promise<PedidosStatusInterface[]>;
}

export { PedidosStatusInterface, PedidosStatusRepo };
