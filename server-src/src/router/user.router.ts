import express from "express";

export const userrouter = express.Router();
import * as controller from "../controllers/main-controller"
import { data } from "../middlewares"
import passport from "passport";
import { roles } from "../helpers/roles"


userrouter.post('/authenticate',
    data.rules.loginValidation,
    controller.user.authenticateUser
)

userrouter.post('/user',
    passport.authenticate(roles.admin, { session: false }),
    data.rules.userValidation,
    data.rules.userExists,
    controller.user.createUser
)

userrouter.get('/user',
    passport.authenticate(roles.common, { session: false }),
    data.rules.userExists,
    controller.user.getUsers
)

userrouter.put('/user/:email',
    passport.authenticate(roles.admin, { session: false }),
    data.rules.userValidation,
    data.rules.notExists,
    controller.user.updateUser
)
