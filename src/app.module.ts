import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductModules } from './Products/products.module';
@Module({
  imports: [ProductModules,MongooseModule.forRoot('mongodb+srv://Uranium-Batch:aruSjkdGdfhc9MRK@functionup.eel5r.mongodb.net/Prod_crud'),],
  controllers: [],
  providers: [],
})
export class AppModule {}
