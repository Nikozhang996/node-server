import express, { Express, Request, Response } from "express";


function createExpressApp(): Express {
  const app: Express = express();

  app.get("/hello", (req: Request, res: Response) => {
    console.log(req.ip);
    const first = 'hello'
    const last = 'world'


    res.end(first + last);
  });

  app.listen(3000, () => {
    console.log(`server is running port: 3000`);
  });

  return app
}

export default createExpressApp;
