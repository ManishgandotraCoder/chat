import express from "express";

export const chatrouter = express.Router();
import * as controller from "../controllers/main-controller"
import { data } from "../middlewares"
import passport from "passport";
import { roles } from "../helpers/roles"


chatrouter.post('/addmsg',
    passport.authenticate(roles.normal, { session: false }),
    controller.message.addMessage
)

chatrouter.post('/getmsg',
    passport.authenticate(roles.normal, { session: false }),
    controller.message.getMessages
)
