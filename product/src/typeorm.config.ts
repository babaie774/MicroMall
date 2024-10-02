import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: 'postgres://username:password@localhost:5432/database',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};
