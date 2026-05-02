import { SocialShell } from "./LoveBankPanel";

interface DreamBankPanelProps {
  onOpenModal: () => void;
}

const dreamPosts = [
  {
    id: "dream-1",
    avatar: "👨‍💻",
    name: "程序员小明",
    handle: "@code_dreamer",
    time: "2h",
    badge: "预测",
    text: "我会在30岁前实现财务自由吗？",
    yes: "1.78",
    no: "2.15",
    percent: "64%",
    volume: "2,345 DREAM",
    likes: 126,
    comments: 23,
    reposts: 58,
  },
  {
    id: "dream-2",
    avatar: "🎨",
    name: "插画师阿茶",
    handle: "@tea_illustrator",
    time: "3h",
    badge: "竞猜",
    text: "我的漫画能出版单行本吗？",
    yes: "2.32",
    no: "1.62",
    percent: "71%",
    volume: "1,876 DREAM",
    likes: 89,
    comments: 17,
    reposts: 32,
  },
  {
    id: "dream-3",
    avatar: "🧭",
    name: "旅行家 Leo",
    handle: "@leo_travel",
    time: "5h",
    badge: "表白梦想",
    text: "我要环游世界",
    yes: "鼓励",
    no: "围观",
    encouragement: "325",
    value: "1,250 DREAM",
    tags: "#LifeGoals #DreamBig",
    likes: 203,
    comments: 42,
    reposts: 61,
  },
];

const hotEvents = [
  ["我会创业成功吗？", "1.65"],
  ["AI 会取代人类工作吗？", "1.78"],
  ["我会找到理想的另一半吗？", "2.20"],
  ["我能考上理想的博士吗？", "1.92"],
  ["元宇宙会改变世界吗？", "2.35"],
];

export default function DreamBankPanel({ onOpenModal }: DreamBankPanelProps) {
  return (
    <div className="h-full bg-white text-slate-950">
      <div className="relative overflow-hidden bg-gradient-to-r from-violet-700 to-indigo-500 p-4 text-white">
        <div className="floating-island island-a">☁</div>
        <div className="floating-island island-b">◆</div>
        <div className="relative z-10 flex items-center gap-4">
          <div className="dream-cloud">☁</div>
          <div className="min-w-0 flex-1">
            <h2 className="font-pixel text-3xl">DREAM BANK</h2>
            <p className="text-xl font-black">梦想银行</p>
            <p className="text-sm text-white/80">梦想是资产，未来可交易。</p>
          </div>
        </div>
      </div>
      <SocialShell
        tint="purple"
        account="DREAM BANK 官方认证"
        handle="@DreamBankOfficial"
        asset="780 DREAM"
        coin="1,230"
        indexLabel="DREAM INDEX"
        indexValue="136.7"
        gain="+9.21%"
        mood="追梦热潮"
        volumeLabel="活跃用户"
        volumeValue="12,345"
        posts={dreamPosts}
        eventsTitle="热门梦想事件"
        hotEvents={hotEvents}
        topics={["30岁前的我", "远程工作是未来吗", "AI 会取代人类工作吗", "DreamBig 勇敢追梦"]}
        onOpenModal={onOpenModal}
      />
    </div>
  );
}
