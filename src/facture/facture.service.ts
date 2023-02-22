import { Facture } from './entities/facture.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FactureService {
  constructor(
    @InjectRepository(Facture)
    private FactureRepository: Repository<Facture>,
  ) {}
  create(facture: Facture): Promise<Facture> {
    return this.FactureRepository.save(facture);
  }

  findAll(): Promise<Facture[]> {
    return this.FactureRepository.find();
  }
  async findOne(id: number): Promise<Facture> {
    return this.FactureRepository.findOneBy({ id });
  }

  async update(id: number, facture: Facture): Promise<Facture> {
    await this.FactureRepository.update(id, facture);
    return this.FactureRepository.findOneBy({ id });
  }
  async remove(id: number): Promise<void> {
    await this.FactureRepository.delete(id);
  }
}
