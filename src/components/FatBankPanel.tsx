import { useState } from "react";
import type { PredictionChoice } from "../types";
import PredictionButton from "./PredictionButton";

interface FatBankPanelProps {
  onOpenModal: () => void;
}

const orders = [
  { name: "小王", avatar: "🧢", mode: "EATING MODE", detail: "借入：8 FAT", price: "利率：10%", action: "接单" },
  { name: "小李", avatar: "🏃", mode: "RUNNING", detail: "出售：5 FAT", price: "价格：80 COIN", action: "购买" },
];

export default function FatBankPanel({ onOpenModal }: FatBankPanelProps) {
  const [milkTeaChoice, setMilkTeaChoice] = useState<PredictionChoice | null>(null);

  return (
    <div className="h-full bg-[#070b13] text-white">
      <div className="flex items-center gap-4 border-b border-pink-500/35 bg-[#120815] p-4">
        <div className="blob-character">●</div>
        <div className="min-w-0 flex-1">
          <h2 className="font-pixel text-2xl text-pink-200">FAT BANK <span className="text-lg">脂肪银行</span></h2>
          <p className="mt-1 text-sm font-bold text-pink-100/80">把罪恶感存起来，把热量借出去。</p>
        </div>
        <span className="coin-stack">●</span>
      </div>

      <div className="pixel-hud grid grid-cols-4 gap-2">
        <span>FAT BANK</span>
        <span>WORLD<br /><b>1-1</b></span>
        <span>FAT<br /><b className="text-lime-300">+12</b></span>
        <span>RISK<br /><b className="text-red-400">HIGH</b></span>
      </div>

      <div className="p-4">
        <div className="game-stage">
          <div className="cloud cloud-a">☁</div>
          <div className="cloud cloud-b">☁</div>
          <div className="chart-card">
            <p className="font-pixel text-sm text-sky-300">今日脂肪行情</p>
            <p className="mt-3 text-sm">1 FAT = 100 kcal</p>
            <p className="text-2xl font-black text-orange-400">+12.8% ↗</p>
            <p className="mt-2 text-sm font-bold">市场情绪：暴食贪婪</p>
            <div className="bar-chart">
              {[35, 58, 72, 44, 92, 118, 100].map((height, index) => (
                <span key={index} style={{ height }} />
              ))}
            </div>
          </div>
          <div className="ground">
            <span>▣</span><span>▣</span><span>▣</span><span>▣</span><span>▣</span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <button className="fat-action" onClick={(event) => { event.stopPropagation(); onOpenModal(); }}>
            <b>我要借脂肪</b><span>今晚想吃<br />不想承担全部罪恶感</span>
          </button>
          <button className="fat-action green" onClick={(event) => event.stopPropagation()}>
            <b>我要存脂肪</b><span>今天很自律<br />出售燃烧能力</span>
          </button>
          <button className="fat-action purple" onClick={(event) => event.stopPropagation()}>
            <b>我要下注</b><span>预测谁会暴食<br />谁会自律</span>
          </button>
        </div>

        <h3 className="mt-4 font-pixel text-lg text-pink-300">正在交易的脂肪</h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {orders.map((order) => (
            <article className="order-card" key={order.name}>
              <p className="text-lg font-black">{order.avatar} {order.name}</p>
              <p className="font-pixel text-xs text-orange-300">{order.mode}</p>
              <p className="mt-3 text-sm">{order.detail}</p>
              <p className="text-sm">{order.price}</p>
              <button className="pixel-button mt-3 w-full bg-pink-500 px-3 py-2 text-xs font-black">{order.action}</button>
            </article>
          ))}
          <article className="order-card">
            <p className="text-lg font-black">🧋 小张</p>
            <p className="font-pixel text-xs text-pink-300">MILK TEA ADDICT</p>
            <p className="mt-3 text-sm">今晚还喝吗？</p>
            <div className="mt-3 flex gap-2">
              <PredictionButton choice="YES" odds="1.8" color="pink" selected={milkTeaChoice === "YES"} onSelect={setMilkTeaChoice} />
              <PredictionButton choice="NO" odds="2.4" color="blue" selected={milkTeaChoice === "NO"} onSelect={setMilkTeaChoice} />
            </div>
          </article>
        </div>

        <div className="mt-4">
          <h3 className="font-pixel text-lg text-pink-300">脂肪流动图</h3>
          <div className="flow-map">
            <span>暴食者池</span><b>→</b><span>脂肪交易所</span><b>→</b><span>燃烧者池</span>
          </div>
          <div className="grid grid-cols-3 border border-pink-500/30 text-center">
            <div className="stat-cell text-amber-300">+128 FAT<br /><span>已转移</span></div>
            <div className="stat-cell text-lime-300">+42 FAT<br /><span>已燃烧</span></div>
            <div className="stat-cell text-pink-300">19 FAT<br /><span>无人接盘</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
