import { Controller, Get } from '@nestjs/common';
import { Exec04Service } from './exec04.service';

@Controller('exec04')
export class Exec04Controller {
  constructor(private readonly exec04Service: Exec04Service) {}
  @Get()
  getMedia(): string {
    return this.exec04Service.getMedia(7, 9, 4);
  }
}
