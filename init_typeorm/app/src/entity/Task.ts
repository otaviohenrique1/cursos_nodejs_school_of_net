import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

// @Entity() -> Decorator
@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    done: boolean;
}