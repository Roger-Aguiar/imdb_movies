import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Genre 
{
    @PrimaryGeneratedColumn()
    id?: number;
    @Column()
    genre: string;
}
