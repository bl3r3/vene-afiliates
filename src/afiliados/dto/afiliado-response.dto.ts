import { ApiProperty } from '@nestjs/swagger';

export class AfiliadoResponseDto {
  @ApiProperty({ description: 'ID único de MongoDB', example: '635ab...' })
  id: string;

  @ApiProperty({
    description: 'Nombre completo del afiliado',
    example: 'Juan Pérez',
  })
  nombreCompleto: string;

  @ApiProperty({
    description: 'Documento de identidad del afiliado',
    example: 'V12345678',
  })
  documentoIdentidad: string;

  @ApiProperty({ description: 'Edad del afiliado', example: 30 })
  edad: number;

  @ApiProperty({ description: 'Cuota anual del afiliado', example: 1200 })
  cuotaAnual: number;
}
