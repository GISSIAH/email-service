import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  constructor() {}

  @RabbitSubscribe({
    exchange: 'exchange1',
    routingKey: 'product_created',
    queue: 'product-queue',
  })
  async listenerFn(msg: any) {
    console.log(msg);
  }
}
