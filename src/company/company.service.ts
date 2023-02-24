import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';
@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private CompanyRepository: Repository<Company>,
  ) {}
  create(company: Company): Promise<Company> {
    return this.CompanyRepository.save(company);
  }

  findAll(): Promise<Company[]> {
    return this.CompanyRepository.find();
  }

  async findOne(matricuel_fiscal: number): Promise<Company> {
    return this.CompanyRepository.findOneBy({ matricuel_fiscal });
  }

  async update(matricuel_fiscal: number, company: Company): Promise<Company> {
    await this.CompanyRepository.update(matricuel_fiscal, company);
    return this.CompanyRepository.findOneBy({ matricuel_fiscal });
  }

  async remove(matricuel_fiscal: number): Promise<void> {
    await this.CompanyRepository.delete(matricuel_fiscal);
  }
}
