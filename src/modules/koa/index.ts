import Koa from "koa";
import logger from "koa-logger";
import bodyParser from "koa-bodyparser";

// router
import router from "./api/base";

const app = new Koa();
const onerror = require("koa-onerror");

const CONFIG = {
  port: 1995,
};

app.use(logger());
onerror(app);
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.on("error", (err, ctx) => {
  console.error("server error !!!!!!!!!!!!!", err, ctx);
});

app.listen(CONFIG.port, () => {
  console.log(`server is running at http://localhost:${CONFIG.port}`);
});

export default app;
