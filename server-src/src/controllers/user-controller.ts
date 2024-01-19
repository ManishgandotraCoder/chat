import { Response, Request, NextFunction } from "express";
import { helper } from '../helpers/response-helper';
import { msg } from "../helpers/messages"
import userModel from "../models/userModel";
import jwt from "jsonwebtoken";
import { roles } from "../helpers/roles"
import { values } from "../config/values"

export class UserController {
  async authenticateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const user: any = await userModel.findOne({ email, password }).select('-password')

      if (user) {
        var token = await jwt.sign({ _id: user?._id, email: user.email, role: user.role }, values.TOKEN_AUTHENTICATE);
        helper.success(res, msg.USER_LOGGED_IN, { user, token })
      } else {
        helper.error(res, msg.INVALID_CREDENTIALS, {})
      }
    } catch (e) {
      helper.server_error(res, msg.SERVER_ERROR, JSON.stringify(e))
    }
  }
  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password, firstName, lastName, phone, role } = req.body;
      const user: any = await userModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        role: role === roles.admin ? role.toUpperCase() : roles.normal
      })
      if (user) {
        helper.success(res, msg.RECORD_CREATED_SUCCESSFULLY, { email, password, firstName, lastName, phone })
      } else {
        helper.error(res, msg.NO_RECORD, {})
      }
    } catch (e) {
      helper.server_error(res, msg.SERVER_ERROR, JSON.stringify(e))
    }
  }
  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const user: any = await userModel.find({ role: roles.normal }).select('-password');

      if (user) {
        helper.success(res, msg.RECORD_FETCHED_SUCCESSFULLY, user)
      } else {
        helper.error(res, msg.NO_RECORD, {})
      }
    } catch (e) {
      helper.server_error(res, msg.SERVER_ERROR, JSON.stringify(e))
    }
  }
  async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const user: any = await userModel.findOne({ _id: req.params._id }).select('-password');
      if (user) {
        helper.success(res, msg.RECORD_FETCHED_SUCCESSFULLY, user)
      } else {
        helper.error(res, msg.NO_RECORD, {})
      }
    } catch (e) {
      helper.server_error(res, msg.SERVER_ERROR, JSON.stringify(e))
    }
  }
  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {

      const user: any = await userModel
        .findOneAndUpdate({ _id: req.params._id },
          {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
            password: req.body.password
          })
        .select('-password');
      if (user) {
        helper.success(res, msg.RECORD_UPDATED_SUCCESSFULLY, user)
      } else {
        helper.error(res, msg.NO_RECORD, {})
      }
    } catch (e) {
      helper.server_error(res, msg.SERVER_ERROR, JSON.stringify(e))
    }
  }
 
}

