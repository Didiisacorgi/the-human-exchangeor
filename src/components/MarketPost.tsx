import { useState } from "react";
import type { MarketPostData, PredictionChoice } from "../types";
import PredictionButton from "./PredictionButton";

interface MarketPostProps {
  post: MarketPostData;
  color: "pink" | "purple";
}

export default function MarketPost({ post, color }: MarketPostProps) {
  const [selected, setSelected] = useState<PredictionChoice | null>(null);

  return (
    <article className="social-card">
      <div className="flex gap-3">
        <div className="pixel-avatar">{post.avatar}</div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="truncate text-sm font-black text-slate-950">
              {post.name}
              <span className="ml-2 text-xs font-medium text-slate-500">{post.handle} · {post.time}</span>
            </p>
            <span className="text-slate-500">...</span>
          </div>
          <p className="mt-2 text-sm text-slate-800">
            <span className={`mr-2 pixel-tag ${color === "pink" ? "bg-pink-100 text-pink-600" : "bg-violet-100 text-violet-600"}`}>
              {post.badge}
            </span>
            {post.text}
          </p>
          {post.tags && <p className="mt-1 text-xs font-bold text-violet-500">{post.tags}</p>}
          <div className="mt-3 flex gap-3">
            <PredictionButton choice="YES" odds={post.yes} color={color} selected={selected === "YES"} onSelect={setSelected} />
            <PredictionButton choice="NO" odds={post.no} color={color} selected={selected === "NO"} onSelect={setSelected} />
          </div>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
            {post.percent && <span>{post.percent} 选择了 YES</span>}
            {post.volume && <span>交易量 {post.volume}</span>}
            {post.encouragement && <span>收到 {post.encouragement} 个鼓励</span>}
            {post.value && <span>价值 {post.value}</span>}
          </div>
          <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
            <span>♡ {post.comments}</span>
            <span>↻ {post.reposts}</span>
            <span className={color === "pink" ? "text-pink-500" : "text-violet-500"}>♥ {post.likes}</span>
            <span>⇧</span>
          </div>
        </div>
      </div>
    </article>
  );
}
