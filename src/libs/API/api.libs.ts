import axios from "axios";
import { ICustomerResponse } from "libs/interface/all.interfaces";

export const callPostServer = async (url: string, body: {}): Promise<ICustomerResponse | any> => {
    return new Promise<ICustomerResponse | any>(async (resolve, reject) => {
        try {
            const resp = await axios.post(url, body);
            resolve(resp);
        } catch (error) {
            reject(error);
        }
    });
};