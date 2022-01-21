import { Request ,NextFunction, Response, Router } from "express";
import ForbiddenError from "../models/errors/forbidden.error.models";
import userRepository from "../repositories/user.repository";
import JWT, { SignOptions } from 'jsonwebtoken';
import { StatusCodes } from "http-status-codes";
import basicAuthenticationMiddleware from "../middlewares/basic-athentication.middleware";
import jwtAuthenticationMiddleware from "../middlewares/jwt-authentication.middleware";
import { SigningOptions } from "crypto";

const authorizationRouter = Router();

authorizationRouter.post('/token', basicAuthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => {

    try {
       
        const user = req.user;

        if(!user){
            throw new ForbiddenError('Usuário não informado!')
        }

        const jwtPayload = { username: user.username }
        const jwtOptions: SignOptions = { subject: user?.uuid, expiresIn: '15m' }
        const secretKey = 'my_secret_key'

        const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);

        res.status(StatusCodes.OK).json({token: jwt})
        
    } catch (error) {
        next(error);
        
    }

});

authorizationRouter.post('/token/validate', jwtAuthenticationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK)
});



export default authorizationRouter;