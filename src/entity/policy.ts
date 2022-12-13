import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { packages_policy } from "./packages_policy";



@Entity()
export class policy {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    start_date: Date

    @Column({ nullable: true })
    end_date: Date

    @Column({ nullable: true })
    policy_name: string

    @Column({ nullable: false })
    description: string

    @Column({ nullable: true })
    policy_prons: string

    @Column({ nullable: true })
    policy_cons: string

    @Column({ nullable: true })
    policy_doc: string

    @Column({ nullable: true })
    policy_amount: Number

    @Column({ default: true })
    is_active: boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn({ nullable: true })
    updated_at: Date

    @Column({ nullable: true })
    deleted_at: Date

    // @OneToMany(
    //     () => packages_policy,
    //     (pkg_plcy) => pkg_plcy.policy_id
    // )
    // packages_policy_id: packages_policy

}