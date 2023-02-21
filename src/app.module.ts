import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FactureModule } from './facture/facture.module';

@Module({
  imports: [FactureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
