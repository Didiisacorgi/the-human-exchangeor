import MarketPost from "./MarketPost";

interface LoveBankPanelProps {
  onOpenModal: () => void;
}

const lovePosts = [
  {
    id: "love-1",
    avatar: "🧑",
    name: "匿名用户",
    handle: "@secret_crush",
    time: "2h",
    badge: "预测",
    text: "她会不会在24小时内回复我的消息？",
    yes: "1.68",
    no: "2.32",
    percent: "68%",
    volume: "1,234 LOVE",
    likes: 56,
    comments: 12,
    reposts: 23,
  },
  {
    id: "love-2",
    avatar: "👩",
    name: "心动捕手",
    handle: "@catchlove",
    time: "3h",
    badge: "竞猜",
    text: "我们下个月会不会一起去旅行？",
    yes: "1.95",
    no: "1.95",
    percent: "50%",
    volume: "987 LOVE",
    likes: 39,
    comments: 8,
    reposts: 15,
  },
  {
    id: "love-3",
    avatar: "🧑‍💻",
    name: "直觉大师",
    handle: "@intuition_master",
    time: "5h",
    badge: "表白",
    text: "向Ta发送了一段心动表白",
    yes: "鼓励",
    no: "围观",
    encouragement: "325",
    value: "1,250 LOVE",
    likes: 101,
    comments: 20,
    reposts: 8,
  },
];

const hotEvents = [
  ["她会不会在24小时内回复我？", "1.68"],
  ["我们下个月会不会一起旅行？", "1.95"],
  ["他会不会在一周内向我表白？", "2.20"],
  ["今年会不会脱单？", "3.10"],
  ["前任会不会后悔？", "2.45"],
];

export default function LoveBankPanel({ onOpenModal }: LoveBankPanelProps) {
  return (
    <div className="h-full bg-white text-slate-950">
      <div className="flex items-center gap-4 bg-gradient-to-r from-pink-100 to-rose-50 p-4">
        <div className="pixel-big-heart">♥</div>
        <div className="min-w-0 flex-1">
          <h2 className="font-pixel text-3xl text-pink-500">LOVE BANK</h2>
          <p className="text-xl font-black">爱情银行 <span className="text-pink-500">●</span></p>
          <p className="text-sm text-slate-600">好感是资产，心动可交易。</p>
        </div>
      </div>
      <SocialShell
        tint="pink"
        account="LOVE BANK 官方认证"
        handle="@LoveBankOfficial"
        asset="520 LOVE"
        coin="120"
        indexLabel="LOVE INDEX"
        indexValue="128.6"
        gain="+8.6%"
        mood="心动加剧"
        volumeLabel="交易量"
        volumeValue="8,888 笔"
        posts={lovePosts}
        eventsTitle="热门心动事件"
        hotEvents={hotEvents}
        topics={["心动加剧中", "暗恋也要勇敢", "爱情银行上线"]}
        onOpenModal={onOpenModal}
      />
    </div>
  );
}

interface SocialShellProps {
  tint: "pink" | "purple";
  account: string;
  handle: string;
  asset: string;
  coin: string;
  indexLabel: string;
  indexValue: string;
  gain: string;
  mood: string;
  volumeLabel: string;
  volumeValue: string;
  posts: typeof lovePosts;
  eventsTitle: string;
  hotEvents: string[][];
  topics: string[];
  onOpenModal: () => void;
}

export function SocialShell({
  tint,
  account,
  handle,
  asset,
  coin,
  indexLabel,
  indexValue,
  gain,
  mood,
  volumeLabel,
  volumeValue,
  posts,
  eventsTitle,
  hotEvents,
  topics,
  onOpenModal,
}: SocialShellProps) {
  const accent = tint === "pink" ? "text-pink-500" : "text-violet-600";
  const border = tint === "pink" ? "border-pink-200" : "border-violet-200";

  return (
    <div className="grid grid-cols-[54px_minmax(0,1fr)] border-t border-slate-200 lg:grid-cols-[54px_minmax(0,1fr)_220px]">
      <aside className={`flex flex-col items-center gap-6 border-r ${border} py-5 text-2xl ${accent}`}>
        <span>⌂</span><span>⌕</span><span>♧</span><span>✉</span><span>☆</span>
        <button
          className={`mt-3 grid h-11 w-11 place-items-center rounded-full text-white ${tint === "pink" ? "bg-pink-500" : "bg-violet-600"}`}
          onClick={(event) => { event.stopPropagation(); onOpenModal(); }}
        >
          ✎
        </button>
      </aside>
      <main className="min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 px-4 py-3">
          <div>
            <p className="font-black">{account} <span className="text-sky-500">✓</span></p>
            <p className="text-xs text-slate-500">{handle}</p>
          </div>
          <div className="flex gap-3 text-xs font-black">
            <span>资产：{asset}</span>
            <span>COIN：{coin}</span>
          </div>
        </div>
        <div className="flex border-b border-slate-200 text-sm font-black">
          {["推荐", "正在交易", "关注", "热门"].map((tab, index) => (
            <span key={tab} className={`flex-1 py-3 text-center ${index === 0 ? accent : "text-slate-500"}`}>{tab}</span>
          ))}
        </div>
        <div className="space-y-3 bg-slate-50 p-3">
          {posts.map((post) => <MarketPost key={post.id} post={post} color={tint} />)}
        </div>
      </main>
      <aside className="hidden border-l border-slate-200 bg-white p-4 lg:block">
        <div className="rounded-sm bg-gradient-to-br from-white to-slate-50 p-3 shadow-inner">
          <p className={`font-pixel text-xs ${accent}`}>{indexLabel}</p>
          <div className="mt-1 flex items-end gap-2">
            <span className="text-3xl font-black">{indexValue}</span>
            <span className="mb-1 text-sm font-bold text-lime-600">{gain}</span>
          </div>
          <p className="text-xs text-slate-500">市场情绪：{mood}</p>
          <p className="text-xs text-slate-500">{volumeLabel}：{volumeValue}</p>
          <div className="sparkline mt-3">{Array.from({ length: 18 }).map((_, i) => <span key={i} style={{ height: 16 + ((i * 13) % 42) }} />)}</div>
        </div>

        <h3 className={`mt-5 font-pixel text-sm ${accent}`}>{eventsTitle}</h3>
        <ol className="mt-3 space-y-3 text-sm">
          {hotEvents.map(([label, odds], index) => (
            <li key={label} className="flex gap-2">
              <b className={accent}>{index + 1}</b>
              <span className="min-w-0 flex-1 truncate">{label}</span>
              <span>{odds}</span>
            </li>
          ))}
        </ol>

        <h3 className={`mt-5 font-pixel text-sm ${accent}`}>热门话题</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {topics.map((topic) => <span className="pixel-topic" key={topic}>#{topic}</span>)}
        </div>
      </aside>
    </div>
  );
}
