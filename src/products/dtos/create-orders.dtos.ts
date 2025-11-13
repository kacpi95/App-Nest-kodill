// import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  productId: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 20)
  client: string;

  // @IsNotEmpty()
  // @IsString()
  // @Length(5, 100)
  // @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
  address: string;
}
