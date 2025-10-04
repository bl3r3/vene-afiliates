import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Afiliado, AfiliadoSchema } from './schema/afiliado.schema';
import { AfiliadosService } from './afiliados.service';
import { AfiliadosController } from './afiliados.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Afiliado.name, schema: AfiliadoSchema },
    ]),
  ],
  controllers: [AfiliadosController],
  providers: [AfiliadosService],
  exports: [MongooseModule],
})
export class AfiliadosModule {}
