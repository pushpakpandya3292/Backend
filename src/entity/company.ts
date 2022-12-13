import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
} from 'typeorm'
import { User } from './users'


@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    company_name: string

    @Column({ nullable: false })
    phone_number: string

    @Column({ default: true })
    incorporation_in_india: boolean

    @Column({ nullable: true })
    company_type: string

    @Column({ nullable: true })
    company_GSTN_no: string

    @Column({ nullable: true })
    company_pan: string

    @Column({ nullable: true })
    company_address: string

    @Column({ nullable: true })
    city: string

    @Column({ nullable: true })
    state: string

    @Column({ nullable: true })
    pincode: number

    @Column({ nullable: true })
    country: string

    @Column({ nullable: true })
    number_of_locations: number

    @Column({ nullable: true })
    other_address: string

    @Column({ nullable: true })
    liability_limit: string

    @Column({ nullable: true })
    nature_of_business: string

    @Column({ nullable: true })
    industry: string

    @Column({ nullable: true })
    sub_industry: string


    @Column({ nullable: true })
    annual_turnover: Number

    @Column({ nullable: true })
    funding_history: string

    @Column({ nullable: true })
    funding_amount: Number

    @Column({ nullable: true })
    funding_stage: string

    @Column({ nullable: true })
    date: Date

    @Column({ nullable: true })
    number_of_employee: number

    @Column({ nullable: true })
    coverage_territory: string

    @Column({ default: false })
    previous_policy: boolean

    @Column({ nullable: true })
    contact_first_name: string

    @Column({ nullable: true })
    contact_last_name: string

    @Column({ nullable: true })
    contact_email: string

    @Column({ nullable: true })
    contact_phone_number: string

    @Column({ nullable: true })
    contact_job_title: string

    @Column({ nullable: true })
    last_revenue_year: number

    @Column({ nullable: true })
    last_revenue_income: Number

    @Column({ nullable: true })
    current_revenue_year: number

    @Column({ nullable: true })
    current_revenue_income: Number

    @Column({ nullable: true })
    company_workDescription_revenue: string

    @Column({ default: true })
    is_revenue_usewritten_doc: boolean

    @Column({ nullable: true })
    revenue_freq_backup_desc: string

    @Column({ default: false })
    is_revenue_storecrucialinfo: boolean

    @Column({ default: false })
    is_revenue_outsourcework: boolean

    @Column({ default: false })
    is_revenue_contractobligation_do_eo: boolean

    @Column({ default: false })
    is_revenue_remote_avail: boolean

    @Column({ default: false })
    is_revenue_digitalmoneyexposure: boolean

    @Column({ default: false })
    is_existcoverage_director_officer: boolean

    @Column({ default: false })
    is_existcoverage_employementliability: boolean

    @Column({ default: false })
    is_existcoverage_fiduciary: boolean

    @Column({ default: false })
    is_existcoverage_cyberbreach: boolean

    @Column({ default: false })
    is_existcoverage_proflaiability_omissions: boolean

    @Column({ default: false })
    is_past_policycancel_nonrenew: boolean

    @Column({ default: false })
    is_pastclaim_notifyclientofbreach: boolean

    @Column({ default: false })
    is_pastclaim_companypurposecoverage: boolean

    @Column({ default: false })
    is_pastclaim_awareofclaimofcoverage: boolean

    @Column({ default: false })
    is_pastclaim_companyclaimsanycoverage: boolean

    @Column({ default: true })
    is_active: boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn({ nullable: true })
    updated_at: Date

    @Column({ nullable: true })
    deleted_at: Date

    @OneToMany(
        () => User,
        (user) => user.id
    )
    user: User[]


}
