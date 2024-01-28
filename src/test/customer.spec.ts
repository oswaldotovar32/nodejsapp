import { ICustomerResponse } from "../libs/interface/all.interfaces";
import { initializationOfDatabase, server } from "../index";
import { callPostServer } from "../libs/API/api.libs";
import * as dotenv from "dotenv";
import { createCustomers } from "../repository/customer.repository";
import axios from "axios";
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
    test('Should with ok in the response', async () => {
        const response = await callPostServer(urlApi, bodyUrl);
        responseCustomers = response.data.data;
        expect(response.status).toBe(200);
    });
});

describe('Customers', () => {
    test('Should create the customers', async () => {
        const resp = await createCustomers(responseCustomers);
        expect(resp).toBe(true);
    });
});

describe('Root url', () => {
    test('Should response 200', async () => {
        const res = await axios.get(`${url}`);
        expect(res.status).toBe(200);
    })
});

describe('token', () => {
    test('Should with email attribute is required', async () => {
        const res = await axios.post(`${url}/token/generateToken`);
        expect(res.status).toBe(200);
        expect(res.data.code).toBe('005');
        expect(res.data.message).toBe('email attribute is required');
    });
    test('Should with fk_user attribute is required', async () => {
        const res = await axios.post(`${url}/token/generateToken`, {
            email: "ejemplo@gmail.com"
        });
        expect(res.status).toBe(200);
        expect(res.data.code).toBe('005');
        expect(res.data.message).toBe('FkUser attribute is required');
    });
    test('Should response with status Ok', async () => {
        const res = await axios.post(`${url}/token/generateToken`, {
            email: "ejemplo@gmail.com",
            fk_user: "123456"
        });
        expect(res.status).toBe(200);
        expect(res.data.code).toBe('001');
        expect(res.data.token).toBeDefined();
    });

})


afterAll(() => {
    server.close();
});