const Koa = require("koa");

const app = new Koa();

app.use(function (ctx) {
  if (ctx.url === "/a") {
    return ctx.res.end("hello a");
  }
  ctx.res.end("hello world");
});

app.listen(3000, function () {
  console.log(`running ${3000}`);
});
