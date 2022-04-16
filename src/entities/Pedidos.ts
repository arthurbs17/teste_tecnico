import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Clientes } from "./Clientes";
import { PedidosStatus } from "./PedidosStatus";

@Entity("pedidos")
export class Pedidos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  produto: string;

  @Column({ type: "float" })
  valor: number;

  @Column()
  data: Date;

  @Column({ type: "smallint" })
  ativo: number;

  @Column()
  cliente_id: number;

  @Column({ default: 1 })
  pedido_status_id: number;

  @ManyToOne((type) => Clientes, (cliente) => cliente.id)
  cliente: Clientes;

  @ManyToOne((type) => PedidosStatus, (pedido_status) => pedido_status.id)
  pedido_status: PedidosStatus;
}
