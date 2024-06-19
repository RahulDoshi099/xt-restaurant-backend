import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'yourUsername',
  password: 'yourPassword',
  database: 'restaurant_db',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
