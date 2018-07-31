import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
import * as express from "express";
import * as mongoose from "mongoose";
import * as passport from "passport";
import { Passport } from "./modules/passport";
import { Router } from "./modules/router";

class App {

    public app: express.Application;
    public routing: Router = new Router();
    public passportStrategy = new Passport();
    public passport: any = passport;

    constructor() {
        this.app = express();
        this.config();
        this.routing.build(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        dotenv.config({ path: ".env" });
        this.app.use(this.passport.initialize());
        this.passport.use(this.passportStrategy.setup());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        mongoose.connect(process.env.MONGO);
    }

}

export default new App().app;
