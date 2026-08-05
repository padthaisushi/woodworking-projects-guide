// アフィリエイトリンクの一元管理ファイル。
// ClickBankで木工向けオファーが決まりhoplinkを取得したら、このファイルのurlだけを書き換える。
// 記事Markdown本文にはリンクを直書きせず、必ず offerKey 経由でここを参照すること。

export interface AffiliateOffer {
  name: string;
  url: string;
  ctaText: string;
}

export const affiliateOffers: Record<string, AffiliateOffer> = {
  primary: {
    name: "PLACEHOLDER_OFFER_NAME",
    // TODO: ClickBank承認・オファー選定後、実際のhoplinkに差し替える
    url: "https://example.com/PLACEHOLDER_HOPLINK",
    ctaText: "See the Full Woodworking Plans",
  },
};

export function getOffer(offerKey: string): AffiliateOffer {
  const offer = affiliateOffers[offerKey];
  if (!offer) {
    throw new Error(`Unknown affiliate offer key: ${offerKey}`);
  }
  return offer;
}
