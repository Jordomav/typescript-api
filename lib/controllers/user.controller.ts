import * as mongoose from 'mongoose';
import { UserSchema } from "../models/user";
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);

