import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type AfiliadoDocument = Afiliado & Document;

@Schema({ timestamps: true })
export class Afiliado {
  @ApiProperty({ example: 'Roberto' })
  @Prop({ required: true, trim: true })
  nombre: string;

  @ApiProperty({ example: 'Carrasquel' })
  @Prop({ required: true, trim: true })
  apellido: string;

  @ApiProperty({ example: '555-1122' })
  @Prop({ required: true, trim: true })
  telefono: string;

  @ApiProperty({ example: 'V200001' })
  @Prop({ required: true, unique: true, trim: true })
  documentoIdentidad: string;

  @ApiProperty({ example: 'M' })
  @Prop({ required: true })
  genero: string;

  @ApiProperty({ example: '1999-09-21T00:00:00.000Z' })
  @Prop({ required: true })
  fechaNacimiento: Date;

  @ApiProperty({ example: 15 })
  @Prop({ required: true })
  cuotaAnual: number;
}

export const AfiliadoSchema = SchemaFactory.createForClass(Afiliado);
