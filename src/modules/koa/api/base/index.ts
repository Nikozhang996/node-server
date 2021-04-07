import Router from "koa-router";
import redis from "redis";

const router = new Router();
const redisClient = redis.createClient();

router.get("/get-key", async (ctx) => {
  const { name } = ctx.query;
  if (typeof name === "string") {
    console.log(name);
    redisClient.get(name, (err, reply) => {
      if (!err) {
        console.log(reply);
        ctx.body = reply;
      }
    });
  } else {
    ctx.body = "资源不存在";
  }
});
router.post("/set-key", async (ctx, next) => {
  const { key, value } = ctx.request.body;

  redisClient.set(key, value, (err, reply) => {
    if (!err) {
      ctx.body = { code: 200, message: reply };
      next();
    }
  });
  ctx.body = { code: 200, message: 'success' };
});
router.get("/show-list", async (ctx) => {
  ctx.body = {};
});

router.get("/test", async (ctx) => {
  console.log(`${ctx.method} - ${ctx.url}`);

  ctx.body = {
    name: "zjk",
    age: 20,
  };
});

redisClient.on("error", (error) => {
  console.error(error);
});

export default router;
