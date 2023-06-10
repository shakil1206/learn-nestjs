import { BookService } from './book.service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { BookDto, UpdateBookDto } from './dto/book.dto';
import { Query as ExpressQuery } from 'express-serve-static-core'
import { Book } from './schema/book.schema';

@Controller('book')
export class BookController {
    constructor(
        private readonly BookService: BookService
    ) { }

    @Get()
    @UsePipes(new ValidationPipe)
    async getAllBook(@Query() query: ExpressQuery): Promise<Book[]> {
        return this.BookService.findAll(query);
    }

    @Post()
    @UsePipes(new ValidationPipe)
    async createBook(@Body() book: BookDto): Promise<Book> {
        return this.BookService.create(book)
    }

    @Get(':id')
    @UsePipes(new ValidationPipe)
    async getBook(@Param('id') id: string): Promise<Book> {
        return this.BookService.findbyId(id)
    }

    @Put(':id')
    @UsePipes(new ValidationPipe)
    async updateBook(@Param('id') id: string, @Body() book: UpdateBookDto): Promise<Book> {
        return this.BookService.updateById(id, book)
    }

    @Delete(':id')
    @UsePipes(new ValidationPipe)
    async deleteBook(@Param('id') id: string,): Promise<Book> {
        return this.BookService.deleteById(id)
    }
}