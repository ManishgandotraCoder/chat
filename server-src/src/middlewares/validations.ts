import { Validator } from 'node-input-validator';
import { Response, Request, NextFunction } from "express";
import { helper } from '../helpers/response-helper';
import { msg } from "../helpers/messages"
import userModel from '../models/userModel';
import groupModel from '../models/groupModel';

/** 
 * Middleware validation class
 */

export class validations {

  async loginValidation(req: Request, res: Response, next: NextFunction) {

    let ruleObj = {
      email: 'required|email',
      password: 'required|minLength:6',
    }

    const v = new Validator(req.body, ruleObj);
    v.check().then((matched: any) => {
      var allErr = [];
      if (!matched) {
        for (let er in v.errors) {
          allErr.push(v.errors[er]["message"]);
        }
        
        // return res.status(400).send({ message: allErr });
        helper.error(res, msg.INVALID, allErr)
      } else {
        next();
      }
    });
  }
  async userValidation(req: Request, res: Response, next: NextFunction) {
    let ruleObj = {
      email: 'required|email',
      password: 'required|minLength:5',
      firstName: 'required|minLength:3',
      phone: 'required|minLength:10',
      lastName: 'required|minLength:3'
    }

    const v = new Validator(req.body, ruleObj);
    v.check().then((matched: any) => {
      var allErr = [];
      if (!matched) {
        for (let er in v.errors) {
          allErr.push(v.errors[er]["message"]);
        }
        console.log("allErr", allErr);
        // return res.status(400).send({ message: allErr });
        helper.error(res, msg.INVALID, allErr)
      } else {
        next();
      }
    });
  }
  async userExists(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      helper.error(res, msg.USER_ALREADY_EXISTS, {})
    } else {
      next()
    }
  }
  async notExists (req: Request, res: Response, next: NextFunction) {
    const { _id } = req.params;
    const user = await userModel.findOne({ _id });
    if (user) {
      next();
    } else {
      helper.error(res, msg.USER_DOESNOT_EXISTS, {})
    }
  }
  async groupExists(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;
    const user = await groupModel.findOne({ name });
    if (user) {
      helper.error(res, msg.GROUP_ALREADY_EXISTS, {})
    } else {
      next()
    }
  }
}
