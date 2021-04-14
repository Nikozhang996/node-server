import express, { Express, Request, Response } from "express";

const CONFIG = {
  port: 4000,
};

function createExpressApp(): Express {
  const app: Express = express();

  app.get("/hello", (req: Request, res: Response) => {
    console.log(req.ip);
    const first = "hello";
    const last = "world";

    res.end(`${first} ${last}`);
  });

  app.listen(CONFIG.port, () => {
    console.log(`express server is running http://localhost:${CONFIG.port}`);
  });

  return app;
}

export default createExpressApp;
