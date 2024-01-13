import express from "express";

export const grouprouter = express.Router();
import * as controller from "../controllers/main-controller"
import { data } from "../middlewares"
import passport from "passport";
import { roles } from "../helpers/roles"

grouprouter.get('/',
    passport.authenticate(roles.normal, { session: false }),
    controller.group.getGroups
)
grouprouter.post('/',
    passport.authenticate(roles.normal, { session: false }),
    data.rules.groupExists,
    controller.group.createGroup
)
grouprouter.put('/:id',
    passport.authenticate(roles.normal, { session: false }),
    controller.group.updateGroup
)
grouprouter.delete('/:id',
    passport.authenticate(roles.normal, { session: false }),
    controller.group.deleteGroup
)

