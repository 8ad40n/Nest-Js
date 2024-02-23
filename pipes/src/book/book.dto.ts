import { MinLength } from "class-validator";

export class BookDto{
    id: number;

    @MinLength(3)
    name: string;
}