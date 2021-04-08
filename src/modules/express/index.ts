import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  console.log(req.ip);

  res.end("hello word");
});

app.listen(3000, () => {
  console.log(`server is running port: 3000`);
});

export default app;
