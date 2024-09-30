import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './controller/app.controller';
import { AppService } from './controller/app.service';
import { YourEntityModule } from './your-entity/your-entity.module'; // Import your entity module

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'your-username',
      password: 'your-password',
      database: 'your-database',
      autoLoadEntities: true,
      synchronize: true, // Don't use in production. Only for development
    }),
    YourEntityModule, // Add your entity module here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
