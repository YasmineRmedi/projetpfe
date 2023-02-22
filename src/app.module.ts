import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Facture } from './facture/entities/facture.entity';
import { FactureModule } from './facture/facture.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'pfe',
      autoLoadEntities: true,
      synchronize: true,
    }),
    /*TypeOrmModule.forFeature([Facture]),*/
  ],

  /* controllers: [AppController],
  providers: [AppService],*/
})
export class AppModule {}
