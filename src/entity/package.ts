import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { packages_policy } from "./packages_policy";



@Entity()
export class packages {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    package_name: string

    @Column({ nullable: true })
    packages_type: string

    @Column({ nullable: true })
    industry: string

    @Column({ nullable: false })
    sub_industry: number

    @Column({ nullable: true })
    product_associated: string

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
    //     (pkg_plcy) => pkg_plcy.package_id
    // )
    // packages_id_policy: packages_policy

}