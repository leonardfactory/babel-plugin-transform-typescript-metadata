import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Inject()
  appService: AppService;

  @Inject()
  private appService2: AppService;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
