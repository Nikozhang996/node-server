import express, { Application } from "express";
import bodyParser from "body-parser";
import redisRouter from "./router/redis";

const CONFIG = {
  port: 4000,
};

function createExpressApp(): Application {
  const app: Application = express();
  // 解析 application/json
  app.use(bodyParser.json());
  // 解析 application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded());

  // redis router
  app.use("/redis", redisRouter);

  app.listen(CONFIG.port, () => {
    console.log(`express server is running http://localhost:${CONFIG.port}`);
  });

  return app;
}

export default createExpressApp;
