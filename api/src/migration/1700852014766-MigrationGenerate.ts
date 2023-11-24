import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationGenerate1700852014766 implements MigrationInterface {
    name = 'MigrationGenerate1700852014766'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`lst_quotation_type\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cad_work\` (\`id\` int NOT NULL AUTO_INCREMENT, \`description\` text NOT NULL, \`expected_time\` int(4) NOT NULL, \`price\` decimal(10,2) NOT NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, \`create_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`id_quotation\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`lst_work_order_type\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cad_work_order\` (\`id\` int NOT NULL AUTO_INCREMENT, \`price\` decimal(10,2) NOT NULL, \`observation\` text NULL, \`start_date\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`end_date\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`expectation_date\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted\` tinyint NOT NULL DEFAULT 0, \`create_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`id_quotation\` int NOT NULL, \`id_type\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cad_quotation\` (\`id\` int NOT NULL AUTO_INCREMENT, \`price\` decimal(10,2) NOT NULL, \`description\` text NOT NULL, \`expected_time\` int(4) NOT NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, \`create_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`id_claim\` int NOT NULL, \`id_type\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cad_claim\` (\`id\` int NOT NULL AUTO_INCREMENT, \`description\` text NOT NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, \`create_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`id_car\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`lst_car_model\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cad_car\` (\`id_car\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` text NOT NULL, \`plate\` char(7) NOT NULL, \`year\` date NOT NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, \`create_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`id_model\` int NOT NULL, \`clientId\` int NOT NULL, PRIMARY KEY (\`id_car\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cad_contact\` (\`id\` int NOT NULL AUTO_INCREMENT, \`ddi\` int(4) NOT NULL, \`telephone\` bigint(11) NOT NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, \`create_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`id_client\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cad_client\` (\`id_client\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`cpf\` bigint(11) NOT NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, \`create_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`id_address\` int NULL, UNIQUE INDEX \`IDX_c2ba8c15e7bc6f45217287e891\` (\`cpf\`), UNIQUE INDEX \`REL_99feefefe91369458d1917a4b4\` (\`id_address\`), PRIMARY KEY (\`id_client\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cad_address\` (\`id\` int NOT NULL AUTO_INCREMENT, \`cep\` int(8) NOT NULL, \`address\` varchar(255) NOT NULL, \`complement\` varchar(255) NOT NULL, \`neighborhood\` varchar(255) NOT NULL, \`locality\` varchar(255) NOT NULL, \`uf\` varchar(255) NOT NULL, \`number\` int(8) NOT NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, \`create_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_date\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`cad_work\` ADD CONSTRAINT \`FK_341ecf64f6f6293d993231ee92f\` FOREIGN KEY (\`id_quotation\`) REFERENCES \`cad_quotation\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cad_work_order\` ADD CONSTRAINT \`FK_915831bc2799bf1aab2a727d41b\` FOREIGN KEY (\`id_quotation\`) REFERENCES \`cad_quotation\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cad_work_order\` ADD CONSTRAINT \`FK_52e7cfeb58c7f933ec027da2bb2\` FOREIGN KEY (\`id_type\`) REFERENCES \`lst_work_order_type\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cad_quotation\` ADD CONSTRAINT \`FK_c29a196c96fa46ba5573a669281\` FOREIGN KEY (\`id_claim\`) REFERENCES \`cad_claim\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cad_quotation\` ADD CONSTRAINT \`FK_90992fb8c5a69e6ee3100186cae\` FOREIGN KEY (\`id_type\`) REFERENCES \`lst_quotation_type\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cad_claim\` ADD CONSTRAINT \`FK_fad830954d936c8f381cb78cc96\` FOREIGN KEY (\`id_car\`) REFERENCES \`cad_car\`(\`id_car\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cad_car\` ADD CONSTRAINT \`FK_68c3c4b092b23cbdee296de28fe\` FOREIGN KEY (\`id_model\`) REFERENCES \`lst_car_model\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cad_car\` ADD CONSTRAINT \`FK_1fcb0b61a4c6fd7d0c7ab9a9062\` FOREIGN KEY (\`clientId\`) REFERENCES \`cad_client\`(\`id_client\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cad_contact\` ADD CONSTRAINT \`FK_a02d031969ea1909b9780664356\` FOREIGN KEY (\`id_client\`) REFERENCES \`cad_client\`(\`id_client\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cad_client\` ADD CONSTRAINT \`FK_99feefefe91369458d1917a4b49\` FOREIGN KEY (\`id_address\`) REFERENCES \`cad_address\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cad_client\` DROP FOREIGN KEY \`FK_99feefefe91369458d1917a4b49\``);
        await queryRunner.query(`ALTER TABLE \`cad_contact\` DROP FOREIGN KEY \`FK_a02d031969ea1909b9780664356\``);
        await queryRunner.query(`ALTER TABLE \`cad_car\` DROP FOREIGN KEY \`FK_1fcb0b61a4c6fd7d0c7ab9a9062\``);
        await queryRunner.query(`ALTER TABLE \`cad_car\` DROP FOREIGN KEY \`FK_68c3c4b092b23cbdee296de28fe\``);
        await queryRunner.query(`ALTER TABLE \`cad_claim\` DROP FOREIGN KEY \`FK_fad830954d936c8f381cb78cc96\``);
        await queryRunner.query(`ALTER TABLE \`cad_quotation\` DROP FOREIGN KEY \`FK_90992fb8c5a69e6ee3100186cae\``);
        await queryRunner.query(`ALTER TABLE \`cad_quotation\` DROP FOREIGN KEY \`FK_c29a196c96fa46ba5573a669281\``);
        await queryRunner.query(`ALTER TABLE \`cad_work_order\` DROP FOREIGN KEY \`FK_52e7cfeb58c7f933ec027da2bb2\``);
        await queryRunner.query(`ALTER TABLE \`cad_work_order\` DROP FOREIGN KEY \`FK_915831bc2799bf1aab2a727d41b\``);
        await queryRunner.query(`ALTER TABLE \`cad_work\` DROP FOREIGN KEY \`FK_341ecf64f6f6293d993231ee92f\``);
        await queryRunner.query(`DROP TABLE \`cad_address\``);
        await queryRunner.query(`DROP INDEX \`REL_99feefefe91369458d1917a4b4\` ON \`cad_client\``);
        await queryRunner.query(`DROP INDEX \`IDX_c2ba8c15e7bc6f45217287e891\` ON \`cad_client\``);
        await queryRunner.query(`DROP TABLE \`cad_client\``);
        await queryRunner.query(`DROP TABLE \`cad_contact\``);
        await queryRunner.query(`DROP TABLE \`cad_car\``);
        await queryRunner.query(`DROP TABLE \`lst_car_model\``);
        await queryRunner.query(`DROP TABLE \`cad_claim\``);
        await queryRunner.query(`DROP TABLE \`cad_quotation\``);
        await queryRunner.query(`DROP TABLE \`cad_work_order\``);
        await queryRunner.query(`DROP TABLE \`lst_work_order_type\``);
        await queryRunner.query(`DROP TABLE \`cad_work\``);
        await queryRunner.query(`DROP TABLE \`lst_quotation_type\``);
    }

}
