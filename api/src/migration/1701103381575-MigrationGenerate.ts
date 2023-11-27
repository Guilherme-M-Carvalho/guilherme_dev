import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationGenerate1701103381575 implements MigrationInterface {
    name = 'MigrationGenerate1701103381575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`cad_product\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` text NOT NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, \`create_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`id_model\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cad_product_stock\` (\`id\` int NOT NULL AUTO_INCREMENT, \`price\` decimal(10,2) NOT NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, \`create_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`id_product\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`cad_address\` CHANGE \`cep\` \`cep\` int(8) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_address\` CHANGE \`number\` \`number\` int(8) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_contact\` CHANGE \`ddi\` \`ddi\` int(4) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_contact\` CHANGE \`telephone\` \`telephone\` bigint(11) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_client\` CHANGE \`cpf\` \`cpf\` bigint(11) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_work\` CHANGE \`expected_time\` \`expected_time\` int(4) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_work_order\` CHANGE \`end_date\` \`end_date\` datetime(6) NULL DEFAULT null`);
        await queryRunner.query(`ALTER TABLE \`cad_quotation\` CHANGE \`expected_time\` \`expected_time\` int(4) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_product\` ADD CONSTRAINT \`FK_eee6a8fba5812b6e31b54911d1a\` FOREIGN KEY (\`id_model\`) REFERENCES \`lst_car_model\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cad_product_stock\` ADD CONSTRAINT \`FK_f4f4f78af42861702d3c17f504d\` FOREIGN KEY (\`id_product\`) REFERENCES \`cad_product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cad_product_stock\` DROP FOREIGN KEY \`FK_f4f4f78af42861702d3c17f504d\``);
        await queryRunner.query(`ALTER TABLE \`cad_product\` DROP FOREIGN KEY \`FK_eee6a8fba5812b6e31b54911d1a\``);
        await queryRunner.query(`ALTER TABLE \`cad_quotation\` CHANGE \`expected_time\` \`expected_time\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_work_order\` CHANGE \`end_date\` \`end_date\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_work\` CHANGE \`expected_time\` \`expected_time\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_client\` CHANGE \`cpf\` \`cpf\` bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_contact\` CHANGE \`telephone\` \`telephone\` bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_contact\` CHANGE \`ddi\` \`ddi\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_address\` CHANGE \`number\` \`number\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_address\` CHANGE \`cep\` \`cep\` int NOT NULL`);
        await queryRunner.query(`DROP TABLE \`cad_product_stock\``);
        await queryRunner.query(`DROP TABLE \`cad_product\``);
    }

}
