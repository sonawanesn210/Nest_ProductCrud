import { Controller, Post, Body, Get, Param, Put, Delete} from '@nestjs/common';
import { ProductService } from './products.services';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    const generatedId = this.productService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { Details: generatedId };
  }
  @Get()
  getProducts(){
    return this.productService.getProducts()
  }
  @Get(':id')
  getOneProduct(@Param('id') prodId:string,){
   return this.productService.getOneProduct(prodId) 
  }
/*   @Put(':id')
  updateProduct(@Param('id') prodId:string, @Body('title') prodTitle :string, @Body('description') ProdDesc:string,@Body('price') prodPrice:number) */

  @Delete(':id')
  deleteProd(@Param('id') prodId:string,){
    return this.productService.deleteProd(prodId)
  }
}
