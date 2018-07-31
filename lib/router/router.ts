import {Request, Response} from "express";
import { UserController } from "../controllers/user.controller"; 

export class Rotuer {

  public userController: UserController = new UserController();

  public build(app): void {
    app.route('/').get((req: Request, res: Response) => {
    res.send('API Up');
    });
    
    app.route('/postUser').post(this.userController.addUser);
  }
  
  app.route('/userLogin').post(this.userController.userLogin);
  
  app.route('/user/:id').get(this.userController.getUser);
}