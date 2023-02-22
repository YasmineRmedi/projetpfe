import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Facture {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column()
  public prix_ht: number;
  @Column()
  public montant_fodec: number;
  @Column()
  public taux_fodec: number;
  @Column()
  public montant_tva: number;
  @Column()
  public taux_tva: number;
  @Column()
  public nom_client: string;
  @Column()
  public prenom_client: string;
  @Column()
  public date: Date;
}
