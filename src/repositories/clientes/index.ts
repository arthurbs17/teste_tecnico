import { Repository, getRepository } from "typeorm";
import { ClienteInterface, ClienteRepo } from "./interface";
import { Clientes } from "../../entities/Clientes";

class ClienteRepository implements ClienteRepo {
  private ormRepo: Repository<Clientes>;

  constructor() {
    this.ormRepo = getRepository(Clientes);
  }

  criarCliente = async (cliente: ClienteInterface) =>
    await this.ormRepo.save(cliente);

  visualizarClientes = async () => await this.ormRepo.find();
}

export { ClienteRepository, Clientes };
