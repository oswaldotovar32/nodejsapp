import { Customer } from "../model/customer.model";
import { ICustomer, ICustomerResponse } from "../libs/interface/all.interfaces";

export const createCustomers = async (customersResponse: ICustomerResponse): Promise<boolean> => {
    return new Promise<boolean>(async (resolve, reject) => {
        try {
            let promises = [];
            for (const key in customersResponse) {
                if (customersResponse.hasOwnProperty(key) && customersResponse[key].visible) {
                    promises.push(await Customer.save({
                        name: key,
                        ...customersResponse[key],
                    }));
                }
            }
            Promise.all(promises);
            resolve(true);
        } catch (error) {
            reject(error);
        }
    })
};

export const createCustomer = async (customer: ICustomer) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log('customer', customer);
            resolve(true);
        } catch (error) {
            reject(error);
        }
    });
};