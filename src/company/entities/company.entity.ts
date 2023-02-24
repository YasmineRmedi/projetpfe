import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  public matricuel_fiscal: number;
  @Column()
  public nom_company: string;
  @Column()
  public Adresse: string;
}
