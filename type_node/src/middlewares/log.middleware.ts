import { Request, Response } from "express";

const myMiddleware = (req: Request, res: Response, next: any) => {
    console.log('My Middleware working with TS');
    next();
};

export default myMiddleware;