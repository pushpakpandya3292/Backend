import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Company } from "./company";


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    first_name: string

    @Column({ nullable: true })
    last_name: string

    @Column({ nullable: true })
    email: string

    @Column({ default: false })
    is_emailVerified: boolean

    @Column({ nullable: true })
    password: string

    @Column({ nullable: true })
    phone_number: string

    @Column({ nullable: true })
    job_title: string

    @ManyToOne(() => Company, (comp) => comp.id)
    @JoinColumn({
        name: 'company',
        referencedColumnName: 'id',
    })
    company: Company

    @Column({ default: true })
    is_active: boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn({ nullable: true })
    updated_at: Date

    @Column({ nullable: true })
    deleted_at: Date

}