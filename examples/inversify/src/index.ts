import 'reflect-metadata';

import getDecorators from 'inversify-inject-decorators';
import { Container, injectable } from 'inversify';

@injectable()
class PrintService {
  print(book: Book) {
    console.log(`Book "${book.summary}" by ${book.author}.`);
  }
}

let container = new Container();
container.bind<PrintService>('PrintService').to(PrintService);
let { lazyInject } = getDecorators(container);

/**
 * Additional function to make properties decorators compatible with babel.
 */
function fixPropertyDecorator<T extends Function>(decorator: T): T {
  return ((...args: any[]) => (
    target: any,
    propertyName: any,
    ...decoratorArgs: any[]
  ) => {
    decorator(...args)(target, propertyName, ...decoratorArgs);
    return Object.getOwnPropertyDescriptor(target, propertyName);
  }) as any;
}

const lazyInjectFix = fixPropertyDecorator(lazyInject);

class Book {
  @lazyInjectFix('PrintService')
  private printService!: PrintService;

  public constructor(public author: string, public summary: string) {}

  public print() {
    this.printService.print(this);
  }
}

// Book instance is NOT created by InversifyJS
let book = new Book('George Orwell', '1984');
book.print();
