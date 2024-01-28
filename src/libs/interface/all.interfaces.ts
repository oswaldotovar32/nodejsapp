import { ObjectLiteral } from "typeorm";

/**
 * Interface for database response when update a field
 * @version 1.0.0
 * @author Oswaldo Tovar <OswaldoTovar32@gmail.com>
 * @link https://github.com/oswaldotovar32
 */
export interface IUpdatedRes {
    generatedMaps?: ObjectLiteral[];
    raw?: [];
    affected?: number;
};

/**
 * @version 1.0.0
 * @author Oswaldo Tovar <OswaldoTovar32@gmail.com>
 * @link https://github.com/oswaldotovar32
 */
export interface IResponseData {
    code?: string;
    message?: string;
    data?: {} | [];
};

export interface ICustomerResponse {
    [key: string]: ICustomer
}

/**
 * Interface for Customers
 * @version 1.0.0
 * @author Oswaldo Tovar <OswaldoTovar32@gmail.com>
 * @link https://github.com/oswaldotovar32
 */
export interface ICustomer {
    name: string;
    req: boolean;
    group_name: string;
    visible: boolean;
    orden: number;
    maxlength: number;
    type: string;
    newline: boolean;
    hidetitle: boolean;
    split: boolean;
    mapper: string;
    clientzone_visible: boolean;
    clientzone_editable: boolean;
    clientzone_check: string;
    clientzone_required: boolean;
    cl_visible: boolean;
    step: number;
    auto_approve: boolean;
    condition_type: number;
    condition: string[];
    values: {};
    regex: string;
}