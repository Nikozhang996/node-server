/*
* https://xiejiahe.com/blog/detail/5a74106674aaca06bbdb7d25
*/
import { Router } from "express";

const router = Router();

router.get("/template", async function(_req, res) {
  res.render("test", {
    title: "VLADIMIR",
    width: 340,
    height: 264
  });
});

export default router;
