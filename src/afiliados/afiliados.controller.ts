import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Get,
  Param,
  Delete,
} from '@nestjs/common';
import { AfiliadosService } from './afiliados.service';
import { CreateAfiliadoDto } from './dto/create-afiliado.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AfiliadoResponseDto } from './dto/afiliado-response.dto';
import { Afiliado } from './schema/afiliado.schema';

@ApiTags('Afiliados')
@Controller('afiliados')
export class AfiliadosController {
  constructor(private readonly afiliadosService: AfiliadosService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo afiliado' })
  @ApiResponse({
    status: 201,
    description: 'Afiliado creado exitosamente.',
    type: Afiliado,
  })
  @ApiResponse({
    status: 409,
    description: 'El documento de identidad ya existe.',
  })
  @ApiResponse({ status: 400, description: 'Datos de entrada inválidos.' })
  async createAfiliado(
    @Body(new ValidationPipe()) createAfiliadoDto: CreateAfiliadoDto,
  ) {
    return this.afiliadosService.create(createAfiliadoDto);
  }

  @Get('all')
  @ApiOperation({ summary: 'Obtener un listado de todos los afiliados' })
  @ApiResponse({
    status: 200,
    description: 'Listado de afiliados exitoso.',
    type: [AfiliadoResponseDto],
  })
  async getAllAfiliados() {
    return this.afiliadosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar un afiliado por su ID' })
  @ApiResponse({
    status: 200,
    description: 'Afiliado encontrado.',
    type: Afiliado,
  })
  @ApiResponse({ status: 404, description: 'Afiliado no encontrado.' })
  async getAfiliadoById(@Param('id') id: string) {
    return this.afiliadosService.findById(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un afiliado por su ID' })
  @ApiResponse({ status: 200, description: 'Afiliado eliminado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Afiliado no encontrado.' })
  async removeAfiliado(@Param('id') id: string) {
    return this.afiliadosService.remove(id);
  }
}
