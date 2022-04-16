import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("clientes")
export class Clientes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nome: string;

  @Column({ length: 15, unique: true })
  cpf: string;

  @Column()
  data_nasc: Date;

  @Column({ length: 15 })
  telefone: string;

  @Column({ type: "smallint" })
  ativo: number;
}
