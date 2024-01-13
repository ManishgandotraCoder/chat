import express from "express";

export const chatrouter = express.Router();
import * as controller from "../controllers/main-controller"
import { data } from "../middlewares"
import passport from "passport";
import { roles } from "../helpers/roles"


chatrouter.get('/friends',
    passport.authenticate(roles.normal, { session: false }),
    controller.user.createUser
)

