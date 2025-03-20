import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum Status{
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    IN_PROGRESS = "IN_PROGRESS"
}

@Entity()
export class ToDo{
    @PrimaryGeneratedColumn()
    id: number

    //nullable: el campo del titulo de la tarea no deberá ser nulo o estar vacio
    @Column({type: 'varchar', nullable: false, length: 255})
    tittle: string

    @Column({type:'varchar', nullable: true, length: 255})
    description: string

    @Column({type:'enum', enum: Status, default: Status.PENDING})
    status: Status

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}

