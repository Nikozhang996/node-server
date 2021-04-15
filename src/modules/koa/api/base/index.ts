import Router from "koa-router";

import Redis from "ioredis";

const redisClient = new Redis(); // uses defaults unless given configuration object

const router = new Router();

router.get("/hello", async (ctx) => {
  const { name } = ctx.query;
  console.log(name);
});

redisClient.on("error", (error: string) => {
  console.error(error);
});

export default router;
