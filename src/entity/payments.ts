import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./users";

@Entity()
export class payments {

    @PrimaryGeneratedColumn()
    payment_id: number

    @Column({ nullable: true })
    payment_date: Date

    @Column({ nullable: true })
    payment_amount: number

    @Column({ nullable: true })
    payment_description: string

    @Column({ nullable: false })
    currency: string

    @Column({ nullable: true })
    amount: number

    @Column({ nullable: true })
    taxes: number

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({
        name: 'cus_ref_id',
        referencedColumnName: 'id',
    })
    cus_ref_id: User

    @Column({ default: true })
    is_active: boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn({ nullable: true })
    updated_at: Date

    @Column({ nullable: true })
    deleted_at: Date

}