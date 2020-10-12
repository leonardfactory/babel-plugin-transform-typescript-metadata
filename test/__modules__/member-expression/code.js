import AWS from 'aws-sdk';

@Injectable()
export class SomeService {
 constructor(
    @Inject('aws.s3') private s3client: AWS.S3,
  ) {}
}
