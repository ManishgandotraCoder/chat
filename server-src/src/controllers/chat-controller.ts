import { helper } from '../helpers/response-helper';
import { msg } from "../helpers/messages"
import userModel from "../models/userModel";
import { Response, Request, NextFunction } from "express";

export class UserController {
    async authenticateUser(req: Request, res: Response, next: NextFunction) {
    //   try {
    //       helper.success(res, msg.USER_LOGGED_IN, { user, token })
    //     } else {
    //       helper.error(res, msg.NO_RECORD, {})
    //     }
    //   } catch (e) {
    //     helper.server_error(res, msg.SERVER_ERROR, JSON.stringify(e))
    //   }
    }
}