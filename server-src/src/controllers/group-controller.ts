import { helper } from '../helpers/response-helper';
import { msg } from "../helpers/messages"
import groupModel from "../models/groupModel";
import { Response, Request, NextFunction } from "express";
import userModel from '../models/userModel';

export class GroupController {
    async getGroups(req: Request, res: Response, next: NextFunction) {
        try {
            const groupInfo: any = req.user
            const user: any = await groupModel
                // .find({ 'members.userId': groupInfo._id })
                .find({})
                .populate('members.userId', ' firstName lastName');

            if (user) {
                helper.success(res, msg.RECORD_FETCHED_SUCCESSFULLY, user)
            } else {
                helper.error(res, msg.NO_RECORD, {})
            }
        } catch (e) {
            helper.server_error(res, msg.SERVER_ERROR, JSON.stringify(e))
        }
    }
    async createGroup(req: Request, res: Response, next: NextFunction) {
        try {
            const { name } = req.body;
            const groupInfo: any = req.user


            const group: any = await groupModel.create({
                createdBy: groupInfo._id,
                name: name,
                members: [{ userId: groupInfo?._id }]
            })
            if (group) {
                helper.success(res, msg.RECORD_CREATED_SUCCESSFULLY, group)
            } else {
                helper.error(res, msg.NO_RECORD, {})
            }
        } catch (e) {
            helper.server_error(res, msg.SERVER_ERROR, JSON.stringify(e))
        }
    }
    async updateGroup(req: Request, res: Response, next: NextFunction) {
        try {
            let filter: any = {
                name: req.body.name
            }

            if (req.body.type === 'add') {
                filter = { $push: { members: { userId: req.body.member } } }
            }
            if (req.body.type === 'rem') {
                filter = { $pull: { members: { userId: req.body.member } } }
            }
            const user: any = await groupModel
                .findOneAndUpdate({ _id: req.params.id }, filter
                )
                .select('-password');

            if (user) {
                helper.success(res, msg.RECORD_UPDATED_SUCCESSFULLY, null)
            } else {
                helper.error(res, msg.NO_RECORD, {})
            }
        } catch (e) {
            helper.server_error(res, msg.SERVER_ERROR, JSON.stringify(e))
        }
    }
    async deleteGroup(req: Request, res: Response, next: NextFunction) {
        try {

            const user: any = await groupModel
                .deleteOne({ _id: req.params.id }
                )
            if (user) {
                helper.success(res, msg.RECORD_UPDATED_SUCCESSFULLY, null)
            } else {
                helper.error(res, msg.NO_RECORD, {})
            }
        } catch (e) {
            helper.server_error(res, msg.SERVER_ERROR, JSON.stringify(e))
        }
    }
    async getGroup(req: Request, res: Response, next: NextFunction) {
        try {
            const groupInfo: any = req.params
            const user: any = await groupModel
                .findOne({ '_id': groupInfo.id })
                .populate('members.userId', 'email firstName lastName');

            if (user) {
                helper.success(res, msg.RECORD_FETCHED_SUCCESSFULLY, user)
            } else {
                helper.error(res, msg.NO_RECORD, {})
            }
        } catch (e) {
            helper.server_error(res, msg.SERVER_ERROR, JSON.stringify(e))
        }
    }
    async getNonGroupMembers(req: Request, res: Response, next: NextFunction) {
        try {
            const groupInfo: any = req.params

            const group: any = await groupModel.findOne({ _id: groupInfo.group })
            if (group && group.members) {
                console.log(group.members);
                let memberList = group.members.map((item: any) => item.userId)
                const user: any = await userModel.find({ _id: { $nin: memberList }, role: "NORMAL" })
                helper.success(res, msg.RECORD_FETCHED_SUCCESSFULLY, user)
            } else {
                helper.error(res, msg.NO_RECORD, [])
            }
        } catch (e) {
            helper.server_error(res, msg.SERVER_ERROR, JSON.stringify(e))
        }
    }
}