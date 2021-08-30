import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Actor 
{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    actor: string;
    @Column()
    born: string;
    @Column()
    country: string;
    @Column()
    imdb_link: string;
    @Column()
    as_actor: number;
    @Column()
    as_producer: number;
    @Column()
    as_director: number;
}
