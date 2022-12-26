import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductService {

  insertProduct(title: string, desc: string, price: number) {
    const productId = Date.now().toString(); //insted of uuid
    const newProduct = new Product(productId, title, desc, price);
    this.products.push(newProduct);
    return newProduct;
  }

  getProducts(){
    return [...this.products];
  }

  getOneProduct(productId:string){
    const product =this.products.find(prod=> prod.id===productId)
    if(!product){
      throw new NotFoundException('Not found this product')
    }
    return {...product}
  }

  deleteProd(productId:string){
    const product = this.products.find(prod=> prod.id===productId)
    if(!product){
      throw new NotFoundException('Not found')
    }
    return 'deleted'
  }
 /*  updateProduct(productId:string,title:string,desc:string,price:number){
    const updateProd =this.products.find(prod=>prod.id===productId)
    if(!updateProd){
      throw new NotFoundException('Not found this product')
    }
    /* const updateProduct = {...this.products}
    if(title){
      updateProduct.title =title
    }
    if(desc){
      updateProduct.description =desc
    }
    if(price){
      updateProduct.price =price
    } 
    return this.products.find({productId},{...this.products},{new:true})

  } */


}
