import { Controller } from '@nestjs/common';
import { EmailService } from './email.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @EventPattern('product_created')
  async productCreated(data) {
    console.log(data);
    //await this.emailService.sendEmail();
  }
}
