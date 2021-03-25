import Koa from "koa";
import Router from "koa-router";
import logger from "koa-logger";
import fs from "fs";

const onerror = require("koa-onerror");

const CONFIG = {
  port: 1995,
};

const router = new Router();
const app = new Koa();

app.use(router.routes());
app.use(logger());
onerror(app);


router.get("/test", async function (ctx) {
  console.log(`${ctx.method} - ${ctx.url}`);
  fs.readFile("./api/base/index.ts", function (err, data) {
    if (!err) {
      ctx.body = data;
    }
  });

  /*ctx.body = {
    name: "zjk",
    age: 20,
  };*/
});

app.on("error", (err, ctx) => {
  console.error("server error !!!!!!!!!!!!!", err, ctx);
});

app.listen(CONFIG.port, () => {
  console.log(`server is running at http://localhost:${CONFIG.port}`);
});

export default app;
