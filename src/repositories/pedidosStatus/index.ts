import { Repository, getRepository } from "typeorm";
import { PedidosStatus } from "../../entities/PedidosStatus";
import { PedidosStatusInterface, PedidosStatusRepo } from "./interface";

class PedidosStatusRepository implements PedidosStatusRepo {
  private ormRepo: Repository<PedidosStatus>;

  constructor() {
    this.ormRepo = getRepository(PedidosStatus);
  }

  criarStatus = async (status: PedidosStatusInterface) =>
    await this.ormRepo.save(status);

  visualizarStatus = async () => await this.ormRepo.find();
}

export { PedidosStatusRepository, PedidosStatus };
