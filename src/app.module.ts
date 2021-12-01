import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Exec01Controller } from './exec01/exec01.controller';
import { Exec01Service } from './exec01/exec01.service';
import { Exec02Controller } from './exec02/exec02.controller';
import { Exec02Service } from './exec02/exec02.service';
import { Exec03Service } from './exec03/exec03.service';
import { Exec03Controller } from './exec03/exec03.controller';
import { Exec04Controller } from './exec04/exec04.controller';
import { Exec04Service } from './exec04/exec04.service';
import { Exec05Controller } from './exec05/exec05.controller';
import { Exec05Service } from './exec05/exec05.service';
import { Exec06Service } from './exec06/exec06.service';
import { Exec06Controller } from './exec06/exec06.controller';
import { Exec07Controller } from './exec07/exec07.controller';
import { Exec07Service } from './exec07/exec07.service';
import { Exec08Service } from './exec08/exec08.service';
import { Exec08Controller } from './exec08/exec08.controller';
import { Exec09Controller } from './exec09/exec09.controller';
import { Exec09Service } from './exec09/exec09.service';
import { Exec10Service } from './exec10/exec10.service';
import { Exec10Controller } from './exec10/exec10.controller';

@Module({
  imports: [],
  controllers: [AppController, Exec01Controller, Exec02Controller, Exec03Controller, Exec04Controller, Exec05Controller, Exec06Controller, Exec07Controller, Exec08Controller, Exec09Controller, Exec10Controller],
  providers: [AppService, Exec01Service, Exec02Service, Exec03Service, Exec04Service, Exec05Service, Exec06Service, Exec07Service, Exec08Service, Exec09Service, Exec10Service],
})
export class AppModule {}
