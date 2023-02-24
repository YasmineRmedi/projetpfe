import { Subscriber } from './entities/subscriber.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SubscriberService {
  constructor(
    @InjectRepository(Subscriber)
    private subscriberRepository: Repository<Subscriber>,
  ) {}
  create(subscriber: Subscriber): Promise<Subscriber> {
    return this.subscriberRepository.save(subscriber);
  }

  findAll(): Promise<Subscriber[]> {
    return this.subscriberRepository.find();
  }
  async findOne(id_subscriber: number): Promise<Subscriber> {
    return this.subscriberRepository.findOneBy({ id_subscriber });
  }

  async update(
    id_subscriber: number,
    subscriber: Subscriber,
  ): Promise<Subscriber> {
    await this.subscriberRepository.update(id_subscriber, subscriber);
    return this.subscriberRepository.findOneBy({ id_subscriber });
  }
  async remove(id_subscriber: number): Promise<void> {
    await this.subscriberRepository.delete(id_subscriber);
  }
}
