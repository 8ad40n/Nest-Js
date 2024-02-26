import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class UserRegisterRequestDto{
    
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Length(8)
    password: string;

    @IsNotEmpty()
    @Length(8)
    confirm: string;
}