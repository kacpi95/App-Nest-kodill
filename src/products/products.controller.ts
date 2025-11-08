import { ProductsService } from './products.service';
import { Controller, Get } from '@nestjs/common';

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
}
