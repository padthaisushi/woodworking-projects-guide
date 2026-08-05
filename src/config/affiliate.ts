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
    name: "ClickBank Woodworking Plans",
    url: "https://f0e4fcdrkjqhcqwrq73fs--f6v.hop.clickbank.net",
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
