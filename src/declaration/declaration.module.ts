import { Module } from '@nestjs/common';
import { DeclarationService } from './declaration.service';
import { DeclarationController } from './declaration.controller';
import { Declaration } from './entities/declaration.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Declaration])],
  controllers: [DeclarationController],
  providers: [DeclarationService],
})
export class DeclarationModule {}
