import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import * as cors from 'cors';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { CartproductsModule } from './cartproducts/cartproducts.module';
import { GuestIdMiddleware } from './shared/middlewares/guest-id.middleware';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client', 'build'),
    }),
    ProductsModule,
    OrdersModule,
    CartproductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(GuestIdMiddleware).forRoutes('*');

    consumer
      .apply(
        cors({
          origin: 'http://localhost:3001',
          credentials: true,
        }),
      )
      .forRoutes({
        path: '*',
        method: RequestMethod.ALL,
      });
  }
}
