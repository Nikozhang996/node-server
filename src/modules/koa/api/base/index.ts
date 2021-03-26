import Router from "koa-router";
import redis from "redis";

const router = new Router();
const redisClient = redis.createClient();

router.get("/get-key", async function (ctx) {
  const { name } = ctx.query;
  if (typeof name === "string") {
    console.log(name);
    redisClient.get(name, function (err, reply) {
      if (!err) {
        console.log(reply);
        ctx.body = reply;
      }
    });
  } else {
    ctx.body = "资源不存在";
  }
});
router.post("/set-key", async function (ctx, next) {
  const { key, value } = ctx.request.body;

  redisClient.set(key, value, function (err, reply) {
    if (!err) {
      ctx.body = { code: 200, message: reply };
      next();
    }
  });
  ctx.body = { code: 200, message: 'success' };
});
router.get("/show-list", async function (ctx) {
  ctx.body = {};
});

router.get("/test", async function (ctx) {
  console.log(`${ctx.method} - ${ctx.url}`);

  ctx.body = {
    name: "zjk",
    age: 20,
  };
});

redisClient.on("error", function (error) {
  console.error(error);
});

export default router;
