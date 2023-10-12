import { MigrationInterface, QueryRunner } from "typeorm";

export class SessionStore1697089263547 implements MigrationInterface {
    name = 'SessionStore1697089263547'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`gear\` DROP FOREIGN KEY \`FK_8cf3fc4f56cbab4abbc18b02ba4\``);
        await queryRunner.query(`ALTER TABLE \`gear\` DROP FOREIGN KEY \`FK_bc7e9c730d8b899e30ce0f8abe3\``);
        await queryRunner.query(`CREATE TABLE \`sessions\` (\`expiredAt\` bigint NOT NULL, \`id\` varchar(255) NOT NULL, \`json\` varchar(255) NOT NULL, INDEX \`IDX_4c1989542e47d9e3b98fe32c67\` (\`expiredAt\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`img_url\` DROP COLUMN \`imgFolderUrl\``);
        await queryRunner.query(`ALTER TABLE \`img_url\` ADD \`imgFolderUrl\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`firstName\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`firstName\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`lastName\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`lastName\` varchar(255) NULL`);
        await queryRunner.query(`DROP INDEX \`IDX_da5934070b5f2726ebfd3122c8\` ON \`user\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`userName\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`userName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_da5934070b5f2726ebfd3122c8\` (\`userName\`)`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`password\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`gear\` DROP COLUMN \`productName\``);
        await queryRunner.query(`ALTER TABLE \`gear\` ADD \`productName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`gear\` DROP COLUMN \`city\``);
        await queryRunner.query(`ALTER TABLE \`gear\` ADD \`city\` varchar(255) NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`gear\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`gear\` ADD \`email\` varchar(255) NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`gear\` ADD CONSTRAINT \`FK_bc7e9c730d8b899e30ce0f8abe3\` FOREIGN KEY (\`imgFolderUrlId\`) REFERENCES \`img_url\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gear\` ADD CONSTRAINT \`FK_8cf3fc4f56cbab4abbc18b02ba4\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`gear\` DROP FOREIGN KEY \`FK_8cf3fc4f56cbab4abbc18b02ba4\``);
        await queryRunner.query(`ALTER TABLE \`gear\` DROP FOREIGN KEY \`FK_bc7e9c730d8b899e30ce0f8abe3\``);
        await queryRunner.query(`ALTER TABLE \`gear\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`gear\` ADD \`email\` varchar(255) NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`gear\` DROP COLUMN \`city\``);
        await queryRunner.query(`ALTER TABLE \`gear\` ADD \`city\` varchar(255) NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`gear\` DROP COLUMN \`productName\``);
        await queryRunner.query(`ALTER TABLE \`gear\` ADD \`productName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`password\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP INDEX \`IDX_da5934070b5f2726ebfd3122c8\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`userName\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`userName\` varchar(255) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_da5934070b5f2726ebfd3122c8\` ON \`user\` (\`userName\`)`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`lastName\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`lastName\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`firstName\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`firstName\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`img_url\` DROP COLUMN \`imgFolderUrl\``);
        await queryRunner.query(`ALTER TABLE \`img_url\` ADD \`imgFolderUrl\` varchar(255) NULL`);
        await queryRunner.query(`DROP INDEX \`IDX_4c1989542e47d9e3b98fe32c67\` ON \`sessions\``);
        await queryRunner.query(`DROP TABLE \`sessions\``);
        await queryRunner.query(`ALTER TABLE \`gear\` ADD CONSTRAINT \`FK_bc7e9c730d8b899e30ce0f8abe3\` FOREIGN KEY (\`imgFolderUrlId\`) REFERENCES \`gearlink\`.\`img_url\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gear\` ADD CONSTRAINT \`FK_8cf3fc4f56cbab4abbc18b02ba4\` FOREIGN KEY (\`userId\`) REFERENCES \`gearlink\`.\`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
