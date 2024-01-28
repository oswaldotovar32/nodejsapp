import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';

@Entity("customer")
export class Customer extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id?: string;
    @Column({ default: null })
    name: string;
    @Column({ default: false })
    req: boolean;
    @Column({ default: null })
    group?: string;
    @Column({ default: false })
    visible: boolean;
    @Column({ default: 0 })
    order?: number;
    @Column({ default: 0 })
    maxlength: number;
    @Column({ default: null })
    type: string;
    @Column({ default: false })
    newline: boolean;
    @Column({ default: false })
    hidetitle: boolean;
    @Column({ default: false })
    split: boolean;
    @Column({ default: null })
    mapper: string;
    @Column({ default: false })
    clientzone_visible: boolean;
    @Column({ default: false })
    clientzone_editable: boolean;
    @Column({ default: null })
    clientzone_check: string;
    @Column({ default: false })
    clientzone_required: boolean;
    @Column({ default: false })
    cl_visible: boolean;
    @Column({ default: 0 })
    step: number;
    @Column({ default: false })
    auto_approve: boolean;
    @Column({ default: 0 })
    condition_type: number;
    @Column({ type: 'varchar', array: true, nullable: true })
    condition: string[];
    @Column("jsonb", { default: null })
    values: {};
    @Column({ default: null })
    regex: string;
    @CreateDateColumn()
    created_at?: Date;
    @UpdateDateColumn()
    updated_at?: Date;
};