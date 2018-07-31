import {Request, Response} from "express";

export class Rotuer {
  public build(app): void {
    app.route('/').get((req: Request, res: Response) => {
    res.send('API Up');
    });
    
    app.route('/postUser')
  }
}