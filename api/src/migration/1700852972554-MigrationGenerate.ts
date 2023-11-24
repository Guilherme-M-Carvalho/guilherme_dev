import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationGenerate1700852972554 implements MigrationInterface {
    name = 'MigrationGenerate1700852972554'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cad_address\` CHANGE \`cep\` \`cep\` int(8) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_address\` CHANGE \`number\` \`number\` int(8) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_contact\` CHANGE \`ddi\` \`ddi\` int(4) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_contact\` CHANGE \`telephone\` \`telephone\` bigint(11) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_client\` CHANGE \`cpf\` \`cpf\` bigint(11) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_work\` CHANGE \`expected_time\` \`expected_time\` int(4) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_work_order\` CHANGE \`end_date\` \`end_date\` datetime(6) NULL DEFAULT null`);
        await queryRunner.query(`ALTER TABLE \`cad_quotation\` CHANGE \`expected_time\` \`expected_time\` int(4) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cad_quotation\` CHANGE \`expected_time\` \`expected_time\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_work_order\` CHANGE \`end_date\` \`end_date\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`cad_work\` CHANGE \`expected_time\` \`expected_time\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_client\` CHANGE \`cpf\` \`cpf\` bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_contact\` CHANGE \`telephone\` \`telephone\` bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_contact\` CHANGE \`ddi\` \`ddi\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_address\` CHANGE \`number\` \`number\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cad_address\` CHANGE \`cep\` \`cep\` int NOT NULL`);
    }

}
