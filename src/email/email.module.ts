import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

@Module({
  imports:[
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'exchange1',
          type: 'topic',
        },
      ],
      uri: 'amqps://zeahigtb:E4zzJuo5opul94OzhUFyA3fjQKSfkQ3g@sparrow.rmq.cloudamqp.com/zeahigtb',
      connectionInitOptions: { wait: false },
    }),
  ],
  providers: [EmailService],
  controllers: [EmailController]
})
export class EmailModule {}
