import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Declaration {
  @PrimaryGeneratedColumn()
  public id_dec: number;
  @Column()
  public num_autorisation: number;
  @Column()
  public date_autorisation: Date;
  @Column()
  public montant_dec: number;
  @Column()
  public taux_dec: number;
  @Column()
  public date: Date;
}
