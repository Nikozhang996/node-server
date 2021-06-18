/*
 * https://github.com/TencentCloudBase/cloudbase-cli
 * https://titangene.github.io/article/jest-typescript.html
 * */

import { chineseTranslateInitials, matchAndTransString } from "../../src/utils";

test("chineseTranslateInitials：非单字", () => {
  expect(chineseTranslateInitials("唯品会")).toBe("唯品会");
});

test("chineseTranslateInitials：中英文", () => {
  expect(chineseTranslateInitials("A唯品会")).toBe("A唯品会");
});

test("chineseTranslateInitials：英文 A", () => {
  expect(chineseTranslateInitials("A")).toBe("A");
});

test("chineseTranslateInitials：数字", () => {
  expect(chineseTranslateInitials("1")).toBe("1");
});

test("chineseTranslateInitials：单字翻译", () => {
  expect(chineseTranslateInitials("物")).toBe("W");
});

test("matchAndTransString：全中文带中文逗号分割", () => {
  expect(matchAndTransString("唯品会，京东，淘宝")).toBe("WPH，JD，TB");
});

test("matchAndTransString：中英文", () => {
  expect(matchAndTransString("阿里巴巴alibaba")).toBe("ALBBalibaba");
});

test("matchAndTransString：中英数字", () => {
  expect(matchAndTransString("金山kinsoft1024")).toBe("JSkinsoft1024");
});

test("matchAndTransString：中文带空格", () => {
  expect(matchAndTransString(" 金山办公 ")).toBe(" JSBG ");
});

test("matchAndTransString：啊唉哎，不爸吧巴别，操艹草菜蔡财才，党冬冻懂朵堕，福富否飞冯方饭分风，饿", () => {
  expect(
    matchAndTransString(
      "啊唉哎，不爸吧巴别，操艹草菜蔡财才，党冬冻懂朵堕，福富否飞冯方饭分风，饿"
    )
  ).toBe("AAA，BBBBB，CCCCCCC，DDDDDD，FFFFFFFFF，E");
});

test("matchAndTransString：过滤中文字符", () => {
  expect(
    matchAndTransString("123物是人非WPH！？。，金山wps", {
      filterDoubleByte: true,
    })
  ).toBe("123WSRFWPHJSwps");
});
