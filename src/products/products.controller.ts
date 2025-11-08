import { ProductsService } from './products.service';
import { Controller, Get, Param } from '@nestjs/common';

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
}
