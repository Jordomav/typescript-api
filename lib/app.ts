import * as bodyParser from "body-parser";
import * as express from "express";
// import * as passport from "passport";
import { Router } from "./modules/router";

class App {

    public app: express.Application;
    public routing: Router = new Router();
    // public passport: passport;

    constructor() {
        this.app = express();
        this.config();
        this.routing.build(this.app);
    }

    private config(): void{
        this.app.use(bodyParser.json());
        // this.app.use(this.passport.initialize());
        // this.passport.use();
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;