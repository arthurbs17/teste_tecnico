import { Repository, getRepository } from "typeorm";
import { PedidosImagens } from "../../entities/PedidosImagens";
import { PedidosImagensRepo, PedidosImagensInterface } from "./interface";

class PedidosImagensRepository implements PedidosImagensRepo {
  private ormRepo: Repository<PedidosImagens>;

  constructor() {
    this.ormRepo = getRepository(PedidosImagens);
  }

  enviarImagem = async (imagem: PedidosImagensInterface) =>
    await this.ormRepo.save(imagem);
}

export { PedidosImagensInterface, PedidosImagensRepository };
