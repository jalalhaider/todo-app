import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Cat, CatDocument } from "./entities/cat.entity";
import { Model } from 'mongoose';

@Injectable()
export class CatService {


    constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {

    }

    async create(createCatDto: CreateCatDto) {

        const createdCat = new this.catModel(createCatDto);
        return createdCat.save();

    }

    findAll() {
        return this.catModel.find().exec();
    }

    findOne(id: string) {
        return this.catModel.findById(id).exec();
    }

    update(id: string, updateCatDto: UpdateCatDto) {
        return this.catModel.findByIdAndUpdate(id, updateCatDto);
    }

    remove(id: string) {
        return this.catModel.findByIdAndRemove(id);
    }
}
