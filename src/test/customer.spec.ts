import { ICustomerResponse } from "../libs/interface/all.interfaces";
import { initializationOfDatabase, server } from "../index";
import { callPostServer } from "../libs/API/api.libs";
import * as dotenv from "dotenv";
import { createCustomers } from "../repository/customer.repository";
dotenv.config();

beforeEach(async () => {
    // await initializationOfDatabase();
});

const url = process.env.URL_LOCAL;
const urlApi = process.env.URL_API;
let bodyUrl = {
    login: process.env.USER_LOGIN,
    password: process.env.PASS_LOGIN,
    data: {
        "new-registration": true
    }
};
let responseCustomers: ICustomerResponse = {};


describe('Should the external api Works', () => {
    it('Should with ok in the response', async () => {
        const response = await callPostServer(urlApi, bodyUrl);
        responseCustomers = response.data.data;
        expect(response.status).toBe(200);
    });
});

describe('Customers', () => {
    it('Should create the customers', async () => {
        const resp = await createCustomers(responseCustomers);
        expect(resp).toBe(true);
    });
});



afterAll(() => {
    server.close();
});