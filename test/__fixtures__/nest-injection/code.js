import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Inject()
  appService: AppService;

  @Inject()
  private appService2: AppService;

  @Inject()
  private appService3: import('./app.service').AppService;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
