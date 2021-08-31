import {Actor} from "../../actors/entities/actor.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";

@Entity()
export class Movie 
{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    original_title?: string;
    @Column()
    title: string;
    @Column()
    year: string;
    @Column()
    duration?: string;
    @Column()
    imdb_link: string;
    @Column()
    register_date: string;
    @Column()
    last_update: string;

    @ManyToMany(() => Actor, {cascade: true})
    @JoinTable()
    actors: Actor[];
}
