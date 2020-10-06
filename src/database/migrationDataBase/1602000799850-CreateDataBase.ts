import { MigrationInterface, QueryRunner, getConnection } from 'typeorm';

const conn = getConnection('create_database_connection');

export default class CreateDataBase1602000799850 implements MigrationInterface {
  name?: string | undefined;

  public async up(queryRunner: QueryRunner): Promise<void> {
    await conn.query('CREATE DATABASE banco_teste');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await conn.query('DROP DATABASE IF EXISTS banco_teste');
  }
}
