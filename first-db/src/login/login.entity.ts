import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("login")
export class Login extends BaseEntity{
    @PrimaryGeneratedColumn({
        comment: "The login unique identifier",
    })
    id: number;

    @Column({
        type: "varchar",
    })
    password: string;
}