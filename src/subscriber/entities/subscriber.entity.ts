import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Subscriber {
  @PrimaryGeneratedColumn()
  public id_subscriber: number;
  @Column()
  public nom_subscriber: string;
  @Column()
  public prenom_subscriber: string;
  @Column()
  public mail: string;
  @Column()
  public mot_de_passe: string;
}
