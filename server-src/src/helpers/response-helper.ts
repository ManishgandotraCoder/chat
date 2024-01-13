import { Response } from "express";
import {status} from "./status"
  const success = (res:Response, message:string, resData:any) => {
    return res.json({
      status:status.SUCCESS,
      message: message,
      body: resData
    });
}
  const error = (res:Response, message:string, resData:any) => {
    return res.json({
      status:status.ERROR,
      message: message,
      body: null
    });
  }
  const server_error = (res:Response, message:string, resData:any) => {
    return res.json({
      status:status.SERVER_ERROR,
      message: message,
      body: null
    });
  }

export const helper = {
  success,
  error,
  server_error
}