import path from "path";

import express, { Application } from "express";
import bodyParser from "body-parser";
import redisRouter from "./router/redis";
import ejsRouter from "./router/ejs";

const CONFIG = {
  port: 4000,
};

function createExpressApp(): Application {
  const app: Application = express();
  app.set('views', path.resolve(__dirname, '../../views'));
  app.set("view engine", "ejs");

  // 解析 application/json
  app.use(bodyParser.json());
  // 解析 application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded());

  // redis router
  app.use("/redis", redisRouter);
  app.use("/ejs", ejsRouter);

  app.listen(CONFIG.port, () => {
    console.log(`express server is running http://localhost:${CONFIG.port}`);
  });

  return app;
}

export default createExpressApp;
