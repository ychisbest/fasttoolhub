// Adsterra 广告码（后台 Websites → fasttoolhub.com → GET CODE）。留空则不加载。
// 同一个 Native 代码在一页里出现两次 Adsterra 会报冲突，所以每页最多放一个 <AdSlot />。
export const ads = {
  adsterra: {
    native: [
      {
        src: 'https://bauval.org/21/666f3f8d7437f1478d2207f3c9d2b596',
        containerId: 'container-666f3f8d7437f1478d2207f3c9d2b596',
      },
    ] as { src: string; containerId: string }[],
    // Social Bar：单独脚本，放在 </body> 前。
    socialBarSrc: 'https://bauval.org/14/a6e8478fee9d48a7d81ff7d552d7dcd6',
  },
};
