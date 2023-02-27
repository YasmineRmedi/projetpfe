import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Facture } from './facture/entities/facture.entity';
import { FactureModule } from './facture/facture.module';
import { SubscriberModule } from './subscriber/subscriber.module';
import { CompanyModule } from './company/company.module';
import { DeclarationModule } from './declaration/declaration.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.values.env',
    }),
    FactureModule,
    SubscriberModule,
    CompanyModule,
    DeclarationModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
