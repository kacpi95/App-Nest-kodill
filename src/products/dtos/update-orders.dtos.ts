import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class UpdateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @Length(5, 20)
  @IsUUID()
  productId: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 20)
  client: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 100)
  @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : value))
  address: string;
}
