import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { packages } from "./package";
import { policy } from "./policy";



@Entity()
export class packages_policy {

    @PrimaryGeneratedColumn()
    packages_policy_id: number

    @ManyToOne(() => policy, (plcy) => plcy.id)
    @JoinColumn({
        name: 'policy_id',
        referencedColumnName: 'id',
    })
    policy_id: policy

    @ManyToOne(() => packages, (plcy) => plcy.id)
    @JoinColumn({
        name: 'package_id',
        referencedColumnName: 'id',
    })
    package_id: packages

    @Column({ default: true })
    is_active: boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn({ nullable: true })
    updated_at: Date

    @Column({ nullable: true })
    deleted_at: Date

}