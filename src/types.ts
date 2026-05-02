export type BankId = "fat" | "love" | "dream";

export type PredictionChoice = "YES" | "NO";

export interface MarketPostData {
  id: string;
  avatar: string;
  name: string;
  handle: string;
  time: string;
  badge: string;
  text: string;
  yes: string;
  no: string;
  percent?: string;
  volume?: string;
  encouragement?: string;
  value?: string;
  tags?: string;
  likes: number;
  comments: number;
  reposts: number;
}
