import {Request, Response} from 'express';
import {authenticate} from "./db-data";




export function loginUser(req: Request, res: Response) {

  console.log("User login attempt ...");

  const {email, password} = req.body;

  const user = authenticate(email, password);

  if (user) {
<<<<<<< HEAD
    res.status(200).json({email: user.email});
=======
      res.status(200).json({email: user.email});
>>>>>>> 1-start
  }
  else {
    res.sendStatus(403);
  }

}
