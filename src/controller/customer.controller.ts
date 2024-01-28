import { Request, Response } from "express";
import httpResponse from "../libs/resource/httpResponse.json";
import { createCustomers } from "../repository/customer.repository";
import * as dotenv from "dotenv";
dotenv.config();

import { callPostServer } from "../libs/API/api.libs";

export const regfields = async (req: Request, res: Response) => {
    try {
        const respCustomers = await callPostServer(process.env.URL_API, {
            login: process.env.USER_LOGIN,
            password: process.env.PASS_LOGIN,
            data: {
                "new-registration": true
            }
        });
        const customers: boolean = await createCustomers(respCustomers.data.data);
        if (customers) {
            return res.status(httpResponse.Ok).json({
                code: '001',
                message: 'Create customers succesfully'
            });
        } else {
            return res.status(httpResponse.Ok).json({
                code: '001',
                message: 'Create customers succesfully'
            });
        }
    } catch (error) {
        return res.status(httpResponse.ServerError).json({
            code: '000',
            message: 'Someting went wrong'
        });
    }
};