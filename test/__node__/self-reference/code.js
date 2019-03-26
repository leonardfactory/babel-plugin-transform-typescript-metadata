import { inject } from 'lib';

@injectable()
class Self {
  @inject()
  child: Self;
}
