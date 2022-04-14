import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Pedidos } from "./Pedidos";

@Entity("clientes")
export class Clientes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nome: string;

  @Column({ length: 15 })
  cpf: string;

  @Column()
  data_nasc: Date;

  @Column({ length: 15 })
  telefone: string;

  @Column({ type: "smallint" })
  ativo: number;
}
