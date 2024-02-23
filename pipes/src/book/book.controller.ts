import { Body, Controller, Get, Param, ParseIntPipe, Post, ValidationPipe } from '@nestjs/common';
import { BookDto } from './book.dto';
import { BookPipe } from './book.pipe';

@Controller('book')
export class BookController {
    @Get("/:id")
    findBookById(@Param("id", ParseIntPipe) id:number): string
    {
        console.log(id, typeof(id));
        return "This will return Book by id";
    }

    // Validation Pipe
    @Post("/pipe")
    pipeValid(@Body(new ValidationPipe()) book:BookDto): string
    {
        return "Add book";
    }


    // custom pipes
    @Post("/add")
    addBook(@Body(new BookPipe()) book:BookDto): string
    {
        return "Add book";
    }
}
