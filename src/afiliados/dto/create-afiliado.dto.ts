import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsIn,
  MinLength,
} from 'class-validator';

export class CreateAfiliadoDto {
  @ApiProperty({ description: 'Nombre del afiliado', example: 'Juan' })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  nombre: string;

  @ApiProperty({ description: 'Apellido del afiliado', example: 'Pérez' })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  apellido: string;

  @ApiProperty({ description: 'Teléfono del afiliado', example: '04141234567' })
  @IsString()
  @IsNotEmpty()
  telefono: string;

  @ApiProperty({
    description: 'Documento de identidad del afiliado',
    example: 'V12345678',
  })
  @IsString()
  @IsNotEmpty()
  documentoIdentidad: string;

  @ApiProperty({ description: 'Género del afiliado', example: 'M' })
  @IsIn(['M', 'F'])
  @IsNotEmpty()
  genero: string;

  @ApiProperty({
    description: 'Fecha de nacimiento del afiliado',
    example: '1990-01-01',
  })
  @IsDateString()
  @IsNotEmpty()
  fechaNacimiento: Date;
}
