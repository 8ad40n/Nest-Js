import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    findAllUser(): string{
        return "This API will return all users";
    }
    @Post()
    addUser(): string{
        return "This API will Add Users";
    }
}
