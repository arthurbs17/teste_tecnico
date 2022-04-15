interface ClienteInterface {
  id: number;
  nome: string;
  cpf: string;
  data_nasc: Date;
  telefone: string;
  ativo: number;
}

interface ClienteRepo {
  criarCliente: (cliente: ClienteInterface) => Promise<ClienteInterface>;
  visualizarClientes: () => Promise<ClienteInterface[]>;
}

export { ClienteInterface, ClienteRepo };
