import { ArgumentMetadata, PipeTransform } from "@nestjs/common";

export class BookPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        if(value.id == 1)
        {
            return value;
        }
        else{

            throw new Error("Method not implemented.");
        }
    }

}