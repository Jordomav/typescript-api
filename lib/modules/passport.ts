import * as mongoose from "mongoose";
import * as passport from "passport";
import * as passportLocal from "passport-local";
import { UserSchema } from "../models/user";

const LocalStrategy = passportLocal.Strategy;
const User = mongoose.model("User", UserSchema);

export class Passport {
public setup() {
    return new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
        User.findOne({ email: email.toLowerCase() }, (err: any, user: any) => {
            if (err) { return done(err); }
            if (!user) {
                return done(undefined, false, { message: `Email ${email} not found.` });
            }
            user.comparePassword(password, (error: Error, isMatch: boolean) => {
                if (err) { return done(err); }
                if (isMatch) {
                    return done(undefined, user);
                }
                return done(undefined, false, { message: "Invalid email or password." });
            });
        });
    });
}
}