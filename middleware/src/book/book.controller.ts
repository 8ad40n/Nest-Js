import { Controller, Get, Post } from '@nestjs/common';

@Controller('book')
export class BookController {
    @Get()
    findAllBooks(): string{
        return "This API will return all books";
    }
    @Post()
    addBooks(): string{
        return "This API will Add books";
    }
}
