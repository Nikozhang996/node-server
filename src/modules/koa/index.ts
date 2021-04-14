import Koa from "koa";
import logger from "koa-logger";
import bodyParser from "koa-bodyparser";

const onerror = require("koa-onerror");

// router
import router from "./api/base";

const CONFIG = {
  port: 3000,
};

export default function createKoaApp(options = {}) {
  const OPTIONS = { ...options, ...CONFIG };

  const app = new Koa();

  app.use(logger());
  onerror(app);
  app.use(bodyParser());
  app.use(router.routes()).use(router.allowedMethods());

  app.on("error", (err, ctx) => {
    console.error("server error !!!!!!!!!!!!!", err, ctx);
  });

  app.listen(CONFIG.port, () => {
    console.log(`koa server is running at http://localhost:${OPTIONS.port}`);
  });
}
