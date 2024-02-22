import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class BookMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        console.log("This is class based middleware for book module.");

        let protocol= req.protocol; // http https
        let host= req.get("host"); //localost
        let url= req.originalUrl;
        let method= req.method;
        let date= new Date().toDateString();

        console.log(protocol + "://" + host + url + " " + method + " " + date);


        next();
    }

}