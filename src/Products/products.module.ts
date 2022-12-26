import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { ProductsController } from './products.controller';
import { ProductSchema } from './products.model';
import { ProductService } from './products.services';

@Module({
  imports:[MongooseModule.forFeature([{name:'Product',schema:ProductSchema}])],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductModules {}
