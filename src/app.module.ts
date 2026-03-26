import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BoothModule } from './booth/booth.module';
import { Booth } from './booth/entities/booth.entity';
import { PoetModule } from './poet/poet.module';
import { Poet } from './poet/entities/poet.entity';
import { CollectionModule } from './collection/collection.module';
import { PoemModule } from './poem/poem.module';
import { Collection } from './collection/entities/collection.entity';
import { Poem } from './poem/entities/poem.entity';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [Booth, Poet, Collection, Poem],
        synchronize: true,
        ssl: {
          rejectUnauthorized: false,
        },
      }),
      inject: [ConfigService],
    }),
    BoothModule,
    PoetModule,
    CollectionModule,
    PoemModule,
  ],
})
export class AppModule {}