import { Response, Request, NextFunction } from "express";
import { helper } from '../helpers/response-helper';
import { msg } from "../helpers/messages"
import mongoose from "mongoose";
const Messages = require("../models/messageModel");

export class MessageController {
    async getMessages(req: any, res: Response, next: NextFunction) {
        try {
            const { group } = req.body;
            
            const messages = await Messages.find({
                users: {
                    $in: [new mongoose.Types.ObjectId(group)],
                },
            }).populate('sender').sort({ updatedAt: 1 });

            const projectedMessages = messages.map((msg: any) => {
                return {
                    fromSelf: msg.sender._id.toString() === req.user._id.toString(),
                    message: msg.message,
                    time: msg.createdAt,
                    firstName : msg?.sender?.firstName,
                    profile_pic : msg?.sender?.profile_pic,
                    lastName : msg?.sender?.lastName,
                    email : msg?.sender?.lastName,
                    
                };
            });
            helper.success(res, msg.RECORD_FETCHED_SUCCESSFULLY, projectedMessages)
        } catch (ex) {
            next(ex);
        }
    };

    async addMessage(req: any, res: Response, next: NextFunction) {
        try {
            const groupInfo: any = req.user
            const { group, message } = req.body;
            const data = await Messages.create({
                message: message,
                users: [new mongoose.Types.ObjectId(group), new mongoose.Types.ObjectId(req.user._id)],
                sender: groupInfo?._id,
            });

            if (data) return res.json({ msg: "Message added successfully." });
            else return res.json({ msg: "Failed to add message to the database" });
        } catch (ex) {
            next(ex);
        }
    };
};
