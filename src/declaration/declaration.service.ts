import { Injectable } from '@nestjs/common';
import { CreateDeclarationDto } from './dto/create-declaration.dto';
import { UpdateDeclarationDto } from './dto/update-declaration.dto';
import { Declaration } from './entities/declaration.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class DeclarationService {
  constructor(
    @InjectRepository(Declaration)
    private DeclarationRepository: Repository<Declaration>,
  ) {}
  create(declaration: Declaration): Promise<Declaration> {
    return this.DeclarationRepository.save(declaration);
  }

  findAll(): Promise<Declaration[]> {
    return this.DeclarationRepository.find();
  }
  async findOne(id_dec: number): Promise<Declaration> {
    return this.DeclarationRepository.findOneBy({ id_dec });
  }

  async update(id_dec: number, declaration: Declaration): Promise<Declaration> {
    await this.DeclarationRepository.update(id_dec, declaration);
    return this.DeclarationRepository.findOneBy({ id_dec });
  }
  async remove(id_dec: number): Promise<void> {
    await this.DeclarationRepository.delete(id_dec);
  }
}
