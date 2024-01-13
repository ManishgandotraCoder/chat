import express from "express";
export const routes = express();

import {userrouter}  from "../router/user.router";
import {chatrouter}  from "../router/chat.router";

routes.use('/', userrouter);
routes.use('/chat', chatrouter);
