import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActorsModule } from './actors/actors.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ActorsModule, 
            TypeOrmModule.forRoot({
              type: 'mysql',
              host: 'localhost',
              port: 3306,
              username: 'root',
              password: '983453069',
              database: 'imdb_movies123',
              entities: [],
              synchronize: true,
            }),
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
