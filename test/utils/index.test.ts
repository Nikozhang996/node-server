/*
* https://github.com/TencentCloudBase/cloudbase-cli
* https://titangene.github.io/article/jest-typescript.html
* */

import { chineseTranslateInitials, matchAndTransString } from "../../src/utils";

test("单汉字转拼音大写", () => {
  expect(chineseTranslateInitials("物")).toBe("W");
});

test("matchAndTransString", () => {
  expect(matchAndTransString("物是人非")).toBe("WSRF");
});
