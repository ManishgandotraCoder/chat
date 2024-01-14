import * as jwt from "passport-jwt"
import userModel from "../models/userModel";
import { roles } from "../helpers/roles"
import { values } from "../config/values"

const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;
const opts = {
	jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
	secretOrKey: values.TOKEN_AUTHENTICATE
}
export const passport = (passport: any) => {
	passport.use(roles.admin, new JWTStrategy(opts,
		async function (jwt_payload, done) {
			const getUser = await userModel.findOne({ email: jwt_payload.email, role: roles.admin });
			if (getUser) {
				return done(null, getUser);
			}
			return done(null, false);
		}
	));
	passport.use(roles.normal, new JWTStrategy(opts,
		async function (jwt_payload, done) {
			console.log("in::  ", jwt_payload);
			
			const getUser = await userModel.findOne({ email: jwt_payload.email, role: roles.normal });
			if (getUser) {
				return done(null, getUser);
			}
			return done(null, false);
		}
	));
	passport.use(roles.common, new JWTStrategy(opts,
		async function (jwt_payload, done) {
			const getUser = await userModel.findOne({ email: jwt_payload.email });
			if (getUser) {
				return done(null, getUser);
			}
			return done(null, false);
		}
	));
}