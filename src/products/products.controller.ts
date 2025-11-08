import { Product } from 'src/db';
import { ProductsService } from './products.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  private productsService;

  constructor(productService: ProductsService) {
    this.productsService = productService;
  }

  @Get('/')
  getAll(): any {
    return this.productsService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.productsService.getById(id);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.productsService.delete(id);
  }

  @Post('/')
  create(@Body() productData: Omit<Product, 'id'>) {
    return this.productsService.create(productData);
  }
}
