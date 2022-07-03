import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://tests_db:tonotruco321@cluster0.awhfgdt.mongodb.net/test'),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
