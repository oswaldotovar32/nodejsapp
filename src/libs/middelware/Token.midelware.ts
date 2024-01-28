import { Request, Response, NextFunction } from "express";
import jwt, { TokenExpiredError } from "jsonwebtoken";
import { IResponseData } from "../interface/all.interfaces";
require('dotenv').config();
const _secret_key = process.env.SECRET_KEY;
import httpResponses from "../resource/httpResponse.json";

/**
 * Method for generate new Token to clients
 * @author Oswaldo Tovar <OswaldoTovar32@gmail.com>
 * @link https://github.com/oswaldotovar32
 */
export const generateToken = async (req: Request, res: Response, next: NextFunction) => {
    const { fk_user, email } = req.body;
    const dataToken = { id: fk_user, email };
    try {
        const token_auth: string = jwt.sign(dataToken, _secret_key, {
            expiresIn: '8h',
        });
        return res.status(httpResponses.Ok).json({ code: '001', token: token_auth });
    } catch (err) {
        console.log(err);
        return res.status(httpResponses.ServerError).json({ code: "000", message: "Interval server error" });
    }
};

/**
 * Middelware to check the correct token
 * @author Oswaldo Tovar <OswaldoTovar32@gmail.com>
 * @link https://github.com/oswaldotovar32
 */
export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');
    let flyError: boolean = false;
    let status: number = httpResponses.Ok;
    let responseData: IResponseData = { code: '001', message: 'Success' };
    jwt.verify(token, _secret_key, function (err, data) {
        if (err instanceof TokenExpiredError) {
            flyError = true;
            status = httpResponses.NotAuthorization;
            responseData = { code: '1000', message: 'Token expired' };
        } else if (err) {
            flyError = true;
            status = httpResponses.NotAuthorization;
            responseData = { code: '1001', message: 'Not token recived' };
        }
    });
    if (!flyError) {
        return next();
    } else {
        return res.status(status).json(responseData);
    }
};

/**
 * Method for use intern in the server to provide a token
 * @param id 
 * @param email 
 * @returns string
 */
export const refreshToken = (id: string, email: string): string => {
    try {
        const dataToken = { id, email };
        const token_auth: string = jwt.sign(dataToken, _secret_key, {
            expiresIn: '8h',
        });
        return token_auth;
    } catch (error) {
        return null;
    }
};