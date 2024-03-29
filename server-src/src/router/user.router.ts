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
    controller.user.getUsers
)

userrouter.get('/user/:_id',
    passport.authenticate(roles.common, { session: false }),
    controller.user.getUserById
)

userrouter.put('/user/:_id',
    passport.authenticate(roles.admin, { session: false }),
    data.rules.userValidation,
    data.rules.notExists,
    controller.user.updateUser
)

