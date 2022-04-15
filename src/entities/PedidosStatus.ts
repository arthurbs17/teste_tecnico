import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("pedidos_status")
export class PedidosStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  descricao: string;
}
