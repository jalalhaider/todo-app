import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cat')
export class CatController {
    constructor(private readonly catService: CatService) {
    }

    @Post()
    create(@Body() createCatDto: CreateCatDto) {
        return this.catService.create(createCatDto);
    }

    @Get()
    findAll() {
        return this.catService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        try {
            const cat = await this.catService.findOne(id);
            return cat;
        } catch (ex) {
            console.error(ex);
            throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
        }
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        try {
            const cat = await this.catService.update(id, updateCatDto);
            return cat;
        } catch (ex) {
            console.error(ex);
            throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        try {
            const cat = await this.catService.remove(id);
            return cat;
        } catch (ex) {
            console.error(ex);
            throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
        }

    }
}
