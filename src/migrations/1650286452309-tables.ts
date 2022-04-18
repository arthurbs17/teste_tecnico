import {MigrationInterface, QueryRunner} from "typeorm";

export class tables1650286452309 implements MigrationInterface {
    name = 'tables1650286452309'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clientes" ("id" SERIAL NOT NULL, "nome" character varying(255) NOT NULL, "cpf" character varying(15) NOT NULL, "data_nasc" TIMESTAMP NOT NULL, "telefone" character varying(15) NOT NULL, "ativo" smallint NOT NULL, CONSTRAINT "UQ_fd1214820b9f05720b26a917630" UNIQUE ("cpf"), CONSTRAINT "PK_d76bf3571d906e4e86470482c08" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedidos_status" ("id" SERIAL NOT NULL, "descricao" character varying(255) NOT NULL, CONSTRAINT "PK_b45a63956a7594764773f78cb39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedidos" ("id" SERIAL NOT NULL, "produto" character varying(255) NOT NULL, "valor" double precision NOT NULL, "data" TIMESTAMP NOT NULL, "ativo" smallint NOT NULL, "cliente_id" integer NOT NULL, "pedido_status_id" integer NOT NULL DEFAULT '1', "clienteId" integer, "pedidoStatusId" integer, CONSTRAINT "PK_ebb5680ed29a24efdc586846725" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedidos_imagens" ("id" SERIAL NOT NULL, "imagem" character varying(255) NOT NULL, "capa" character varying(255) NOT NULL, "pedido_id" integer NOT NULL, "pedidoId" integer, CONSTRAINT "PK_4b201021d3b88cab29b6ad63ccf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD CONSTRAINT "FK_485346a40b61bb8ae3a98f5400c" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD CONSTRAINT "FK_54c7fca45772133b8e92b5ed074" FOREIGN KEY ("pedidoStatusId") REFERENCES "pedidos_status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedidos_imagens" ADD CONSTRAINT "FK_1d0a69b9b5d2618b200aab4516b" FOREIGN KEY ("pedidoId") REFERENCES "pedidos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedidos_imagens" DROP CONSTRAINT "FK_1d0a69b9b5d2618b200aab4516b"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP CONSTRAINT "FK_54c7fca45772133b8e92b5ed074"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP CONSTRAINT "FK_485346a40b61bb8ae3a98f5400c"`);
        await queryRunner.query(`DROP TABLE "pedidos_imagens"`);
        await queryRunner.query(`DROP TABLE "pedidos"`);
        await queryRunner.query(`DROP TABLE "pedidos_status"`);
        await queryRunner.query(`DROP TABLE "clientes"`);
    }

}
