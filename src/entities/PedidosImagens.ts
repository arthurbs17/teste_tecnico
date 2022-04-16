import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Pedidos } from "./Pedidos";

@Entity("pedidos_imagens")
export class PedidosImagens {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255 })
  imagem: string;

  @Column({ type: "varchar", length: 255 })
  capa: string;

  @Column()
  pedido_id: number;

  @ManyToOne((type) => Pedidos, (pedido) => pedido.id)
  pedido: Pedidos;
}
