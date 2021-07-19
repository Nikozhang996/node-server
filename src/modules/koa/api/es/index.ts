import Router from "koa-router";
import { Client } from "@elastic/elasticsearch";

const client = new Client({ node: "http://localhost:9200" });
const router = new Router();

// router.prefix("/es");

router.get("search", async (ctx) => {
  const { indexName } = ctx.query;

  const res = await client.search({
    index: indexName || "kibana_7.13.2_001",
    body: {
      query: {
        match_all: {},
      },
    },
  });

  ctx.body = res;
});

router.get("/es/cat_count", async (ctx) => {
  const { statusCode, body } = await client.cat.count();
  ctx.body = {
    statusCode,
    body,
  };
});

export default router;
