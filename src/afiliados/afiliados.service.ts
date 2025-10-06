import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Afiliado, AfiliadoDocument } from './schema/afiliado.schema';
import { CreateAfiliadoDto } from './dto/create-afiliado.dto';
import { AfiliadoResponseDto } from './dto/afiliado-response.dto';

@Injectable()
export class AfiliadosService {
  constructor(
    @InjectModel(Afiliado.name) private afiliadoModel: Model<AfiliadoDocument>,
  ) {}

  async create(createAfiliadoDto: CreateAfiliadoDto): Promise<Afiliado> {
    const edad = this.calcularEdad(createAfiliadoDto.fechaNacimiento);
    const cuotaAnual = this.calcularCuotaAnual(edad);

    const newAfiliado = new this.afiliadoModel({
      ...createAfiliadoDto,
      cuotaAnual,
    });

    try {
      return await newAfiliado.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Document ID already exists');
      }
      throw error;
    }
  }

  async findAll(): Promise<AfiliadoResponseDto[]> {
    const afiliados = await this.afiliadoModel.find().exec();
    return afiliados.map((afiliado) => ({
      id: afiliado._id,
      nombreCompleto: `${afiliado.nombre} ${afiliado.apellido}`,
      documentoIdentidad: afiliado.documentoIdentidad,
      edad: this.calcularEdad(afiliado.fechaNacimiento),
      cuotaAnual: afiliado.cuotaAnual,
    }));
  }

  async findById(
    id: string,
  ): Promise<AfiliadoResponseDto[] | NotFoundException> {
    const afiliado = await this.afiliadoModel.findById(id).exec();

    if (!afiliado) {
      throw new NotFoundException('Afiliado not found');
    }

    return [
      {
        id: afiliado._id,
        nombreCompleto: `${afiliado.nombre} ${afiliado.apellido}`,
        documentoIdentidad: afiliado.documentoIdentidad,
        edad: this.calcularEdad(afiliado.fechaNacimiento),
        cuotaAnual: afiliado.cuotaAnual,
      },
    ];
  }

  async remove(id: string): Promise<Afiliado> {
    const afiliadoEliminado = await this.afiliadoModel
      .findByIdAndDelete(id)
      .exec();

    if (!afiliadoEliminado) {
      throw new NotFoundException(`Afiliado con ID "${id}" no encontrado.`);
    }

    return afiliadoEliminado;
  }

  private calcularEdad(fechaNacimiento: Date): number {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  }

  private calcularCuotaAnual(edad: number): number {
    if (edad <= 50) {
      return 15;
    }
    if (edad <= 70) {
      // De 51 a 70
      return 20;
    }
    if (edad <= 90) {
      // De 71 a 90
      return 25;
    }
    return 30; // 91 años o más
  }
}
