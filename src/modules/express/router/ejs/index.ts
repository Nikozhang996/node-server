import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/template", async function(req, res) {
  const { eliteId } = req.query;
  const { status, data } = await axios.get("http://172.18.129.64:9402/coupon/api/jd/jd.union.open.goods.jingfen.query", {
    params: {
      eliteId: eliteId,
      p: "gBDV8c4l3PywBG/ZHuBtlsaSuGI9L6Fs8R3CMgiAwcs=",
      outSkuIds: "10030028874661,100022672084"
    }
  });
  if (status === 200) {
    res.render("index", data.data);
  }
});


export default router;
