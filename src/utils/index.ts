export function chineseTranslateInitials(word: string): string {
  if (!String.prototype.localeCompare) return word;
  if (word.length > 1) return word;
  if (typeof word !== "string") return word;

  const zm = "abcdefghjklmnopqrstwxyz_".split("");
  const zh = "阿吧才的额发嘠好加卡拉吗那哦怕全让撒他哇想呀扎".split("");
  const len = zh.length;
  for (let i = 1; i < len; i++) {
    let r = zh[i].localeCompare(word, "zh");
    if (r >= 0) {
      word = zm[i - 1];
      break;
    }
    if (i === len - 1) {
      word = zm[i];
    }
  }
  return word.toUpperCase();
}

export function matchAndTransString(value: string): string {
  return value.replace(/[\u4e00-\u9fa5]/g, function (item: string) {
    return chineseTranslateInitials(item);
  });
}
