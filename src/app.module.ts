import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';

import { CatModule } from './cat/cat.module';

@Module({
    imports: [
        TaskModule,
        CatModule,
        MongooseModule.forRoot('mongodb://localhost/todo_app00')],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {
};

