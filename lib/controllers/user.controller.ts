import * as bcrypt from "bcrypt";
import { Request, Response } from "express";
import * as mongoose from "mongoose";
import * as passport from "passport";
import { UserSchema } from "../models/user";

const User = mongoose.model("User", UserSchema);
const saltRounds = 10;

export class UserController {

  public addUser(req: Request, res: Response) {
      const newUser: any = new User(req.body);
      bcrypt.genSalt(saltRounds, (err, salt) => {
          bcrypt.hash(req.body.password, salt, (error, hash) => {
              newUser.password = hash;
              newUser.save();
          });
      });
      res.json({newUser});
  }

  public userLogin(req: Request, res: Response) {
      passport.authenticate("local", (err, user, next) => {
          res.json(user);
      });
  }

  public getUser(req: Request, res: Response) {
      User.findById({_id: req.params.id}, (err, user) => {
          if (err) {
              res.send(err);
          } else {
              res.json(user);
          }
      });
  }

  public getAllUsers(req: Request, res: Response) {
      User.find({}, (err, users) => {
         res.send(users);
      });
  }
}
