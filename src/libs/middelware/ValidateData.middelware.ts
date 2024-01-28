import { Request, Response, NextFunction } from "express";
export const validateIncludesEmail = (req: Request, res: Response, next: NextFunction) => {
    if ([undefined, null, 'null', ''].includes(req.body.email))
        return res.status(200).json({ code: '005', message: 'email attribute is required' });
    return next();
};
export const validateIncludesFkUser = (req: Request, res: Response, next: NextFunction) => {
    if ([undefined, null, 'null', ''].includes(req.body.fk_user))
        return res.status(200).json({ code: '005', message: 'FkUser attribute is required' });
    return next();
};