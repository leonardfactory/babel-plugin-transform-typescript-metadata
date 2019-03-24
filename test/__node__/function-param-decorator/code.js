import Based from 'based';
import DecoFn from 'decorator';
import { Some } from 'some';
import { Args, Context } from '@nestjs/graphql';
import { Xyz } from 'xyz';

@Based
class Named {
  constructor(
    @DecoFn(Some) private param: Some,
    @DecoFn private param2: Some,
  ) {}

  @Based()
  methodName(
    @Args() args: Args,
    @Context() context: Context,
    @DecoFn(Xyz) xyz: any
  ) {}
}