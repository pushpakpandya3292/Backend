import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { packages } from "./package";
import { payments } from "./payments";
import { policy } from "./policy";
import { User } from "./users";

@Entity()
export class purchased_policy {

    @PrimaryGeneratedColumn()
    purchased_policy_id: number

    @Column({ default: false })
    is_policy: boolean

    @ManyToOne(() => policy, (plcy) => plcy.id)
    @JoinColumn({
        name: 'policy',
        referencedColumnName: 'id',
    })
    policy: policy

    @Column({ default: false })
    is_package: boolean

    @ManyToOne(() => packages, (pkg) => pkg.id)
    @JoinColumn({
        name: 'package',
        referencedColumnName: 'id',
    })
    package: packages

    @ManyToOne(() => payments, (pay) => pay.payment_id)
    @JoinColumn({
        name: 'payment_id',
        referencedColumnName: 'payment_id',
    })
    payment_id: payments

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