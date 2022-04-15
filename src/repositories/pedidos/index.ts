import { Repository, getRepository } from "typeorm";
import { PedidoInterface, PedidoRepo } from "./interface";
import { Pedidos } from "../../entities/Pedidos";

class PedidoRepository implements PedidoRepo {
  private ormRepo: Repository<Pedidos>;

  constructor() {
    this.ormRepo = getRepository(Pedidos);
  }

  cadastrarPedido = async (pedido: PedidoInterface) =>
    await this.ormRepo.save(pedido);

  visualizarPedido = async () => await this.ormRepo.find();
}

export { PedidoRepository, Pedidos };
