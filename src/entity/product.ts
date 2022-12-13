import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./users";

@Entity()
export class product {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    product_type: string

    @Column({ nullable: true })
    package_associated: string

    @Column({ nullable: true })
    insurer_name: string

    @Column({ nullable: false })
    product_features: number

    @Column({ nullable: true })
    sum_insured: number

    @Column({ nullable: true })
    user_id: string

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({
        name: 'user',
        referencedColumnName: 'id',
    })
    user: User

    @Column({ default: true })
    is_active: boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn({ nullable: true })
    updated_at: Date

    @Column({ nullable: true })
    deleted_at: Date

}