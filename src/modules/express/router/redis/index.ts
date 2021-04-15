import { Router } from "express";

import Redis from "ioredis";

const redis = new Redis(); // uses defaults unless given configuration object

const router = Router();

router.post("/set-key", function (req, res, next) {
  const { key, value } = req.body;
  redis.set(key, value).then((r) => {
    res.send({
      code: 0,
      message: r,
      key,
      value,
    });
    next();
  });
});

router.get("/get", function (req, res, next) {
  const { key } = req.query;

  redis.get(key as string, (err, reply) => {
    if (!err) {
      res.send({
        code: 0,
        key,
        value: reply,
      });
    } else {
      res.end({
        code: 1,
        key,
        message: err,
      });
    }
  });

  next();
});

export default router;
