import { UserController } from "./user-controller"
import { GroupController } from "./group-controller"
import { MessageController } from "./message-controller"

export const user = new UserController();
export const group = new GroupController();
export const message = new MessageController();

