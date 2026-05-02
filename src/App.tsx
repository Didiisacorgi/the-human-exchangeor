import { useState } from "react";

type Bank = "fat" | "love" | "dream";
type Choice = "YES" | "NO";

const posts = {
  love: [
    ["匿名用户", "@secret_crush", "预测", "她会不会在24小时内回复我的消息？", "1.68", "2.32", "68% 选择 YES · 交易量 1,234 LOVE"],
    ["心动捕手", "@catchlove", "竞猜", "我们下个月会不会一起去旅行？", "1.95", "1.95", "50% 选择 YES · 交易量 987 LOVE"],
    ["直觉大师", "@intuition_master", "表白", "向Ta发送了一段心动表白", "鼓励", "围观", "收到 325 个鼓励 · 价值 1,250 LOVE"],
  ],
  dream: [
    ["程序员小明", "@code_dreamer", "预测", "我会在30岁前实现财务自由吗？", "1.78", "2.15", "64% 选择 YES · 交易量 2,345 DREAM"],
    ["插画师阿茶", "@tea_illustrator", "竞猜", "我的漫画能出版单行本吗？", "2.32", "1.62", "71% 选择 YES · 交易量 1,876 DREAM"],
    ["旅行家 Leo", "@leo_travel", "表白梦想", "我要环游世界 #LifeGoals #DreamBig", "鼓励", "围观", "收到 325 个鼓励 · 价值 1,250 DREAM"],
  ],
};

const ranks = {
  love: ["她会不会在24小时内回复我？ 1.68", "我们下个月会不会一起旅行？ 1.95", "他会不会在一周内向我表白？ 2.20", "今年会不会脱单？ 3.10", "前任会不会后悔？ 2.45"],
  dream: ["我会创业成功吗？ 1.65", "AI 会取代人类工作吗？ 1.78", "我会找到理想的另一半吗？ 2.20", "我能考上理想的博士吗？ 1.92", "元宇宙会改变世界吗？ 2.35"],
};

function PredictButton({ label, bank }: { label: string; bank: Bank }) {
  const [chosen, setChosen] = useState(false);
  return (
    <button className={`predict ${bank} ${chosen ? "chosen" : ""}`} onClick={(event) => { event.stopPropagation(); setChosen(true); }}>
      {chosen ? "已参与预测" : label}
    </button>
  );
}

function Modal({ bank, onClose }: { bank: Bank | null; onClose: () => void }) {
  if (!bank) return null;
  const text = {
    fat: ["发布脂肪订单", "把今晚的热量、明早的跑步和无人接盘的罪恶感放进同一个市场。"],
    love: ["发布心动预测", "把暧昧、回复、旅行、复合这些难以控制的瞬间变成可参与的关系市场。"],
    dream: ["发布梦想事件", "让市场根据行动、信心和过往信用，为一个未来目标定价。"],
  }[bank];

  return (
    <div className="modal">
      <div className="modalBox">
        <button className="close" onClick={onClose}>X</button>
        <p className="eyebrow">NEW MARKET</p>
        <h2>{text[0]}</h2>
        <p>{text[1]}</p>
        <input placeholder="写下一个不可完全控制的事件..." />
        <div className="two">
          <input placeholder="YES 赔率" defaultValue="1.88" />
          <input placeholder="NO 赔率" defaultValue="2.16" />
        </div>
        <textarea placeholder="补充背景，让市场理解你的不确定性。" />
        <button className="publish" onClick={onClose}>发布到人类交易所</button>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <header className="hero">
      <div className="scan" />
      <div className="logo">
        <span className="blob" />
        <span className="heart">♥</span>
        <span className="cloud">☁</span>
      </div>
      <div className="heroText">
        <p className="system">HUMAN EXCHANGE SYSTEM</p>
        <h1>THE HUMAN EXCHANGE</h1>
        <h2>人类无法控制的东西，都可以被交易。</h2>
        <p>Trade what matters: body, love, and future.</p>
      </div>
      <div className="slogans">
        <span>◆ 把不确定性变成资产</span>
        <span>◆ 让每个人都能参与定价</span>
        <span>◆ 在交易中看清自己的人生</span>
      </div>
    </header>
  );
}

function FatBank({ open }: { open: () => void }) {
  return (
    <div className="panel fatPanel">
      <div className="bankHead fatHead">
        <div className="fatBlob" />
        <div><h2>FAT BANK 脂肪银行</h2><p>把罪恶感存起来，把热量借出去。</p></div>
        <b className="coins">●</b>
      </div>
      <div className="hud"><span>WORLD 1-1</span><span>FAT +12</span><span>RISK HIGH</span><span>COIN 258</span></div>
      <div className="game">
        <span className="sky c1">☁</span><span className="sky c2">☁</span>
        <div className="terminal">
          <b>今日脂肪行情</b>
          <p>1 FAT = 100 kcal</p>
          <h3>+12.8% ↗</h3>
          <p>市场情绪：暴食贪婪</p>
          <div className="bars">{[38, 70, 56, 96, 84, 122].map((h) => <i key={h} style={{ height: h }} />)}</div>
        </div>
        <div className="bricks">▣ ▣ ▣ ▣ ▣ ▣ ▣ ▣</div>
      </div>
      <div className="actions">
        <button onClick={(e) => { e.stopPropagation(); open(); }}><b>我要借脂肪</b><small>今晚想吃，但不想承担全部罪恶感</small></button>
        <button><b>我要存脂肪</b><small>今天很自律，可以出售燃烧能力</small></button>
        <button><b>我要下注</b><small>预测谁会暴食，谁会自律</small></button>
      </div>
      <h3 className="sectionTitle">正在交易的脂肪</h3>
      <div className="orders">
        <article><b>小王</b><em>EATING MODE</em><p>借入：8 FAT<br />利率：10%</p><button>接单</button></article>
        <article><b>小李</b><em>RUNNING</em><p>出售：5 FAT<br />价格：80 COIN</p><button>购买</button></article>
        <article><b>小张</b><em>MILK TEA ADDICT</em><p>今晚还喝吗？</p><PredictButton bank="fat" label="YES 1.8" /><PredictButton bank="fat" label="NO 2.4" /></article>
      </div>
      <div className="flow"><span>暴食者池</span><b>→</b><span>脂肪交易所</span><b>→</b><span>燃烧者池</span></div>
      <div className="stats"><span>+128 FAT<br />已转移</span><span>+42 FAT<br />已燃烧</span><span>19 FAT<br />无人接盘</span></div>
    </div>
  );
}

function SocialBank({ bank, open }: { bank: "love" | "dream"; open: () => void }) {
  const isLove = bank === "love";
  return (
    <div className={`panel social ${bank}`}>
      <div className="bankHead socialHead">
        <div className="bigIcon">{isLove ? "♥" : "☁"}</div>
        <div><h2>{isLove ? "LOVE BANK" : "DREAM BANK"}</h2><p>{isLove ? "爱情银行 · 好感是资产，心动可交易。" : "梦想银行 · 梦想是资产，未来可交易。"}</p></div>
      </div>
      <div className="socialGrid">
        <aside className="rail"><span>⌂</span><span>⌕</span><span>♧</span><span>✉</span><button onClick={(e) => { e.stopPropagation(); open(); }}>✎</button></aside>
        <main>
          <div className="account"><b>{isLove ? "LOVE BANK" : "DREAM BANK"} 官方认证 ✓</b><span>@{isLove ? "LoveBankOfficial" : "DreamBankOfficial"}</span><em>资产：{isLove ? "520 LOVE" : "780 DREAM"} · COIN：{isLove ? "120" : "1,230"}</em></div>
          <nav><b>推荐</b><span>正在交易</span><span>关注</span><span>热门</span></nav>
          {posts[bank].map((post) => (
            <article className="post" key={post[1]}>
              <div className="avatar">{isLove ? "🧑" : "👨‍💻"}</div>
              <div><b>{post[0]} <small>{post[1]} · 2h</small></b><p><mark>{post[2]}</mark>{post[3]}</p><div className="odds"><PredictButton bank={bank} label={`YES ${post[4]}`} /><PredictButton bank={bank} label={`NO ${post[5]}`} /></div><small>{post[6]}</small></div>
            </article>
          ))}
        </main>
        <aside className="rank">
          <h3>{isLove ? "LOVE INDEX" : "DREAM INDEX"}</h3>
          <strong>{isLove ? "128.6" : "136.7"} <small>{isLove ? "+8.6%" : "+9.21%"}</small></strong>
          <p>市场情绪：{isLove ? "心动加剧" : "追梦热潮"}</p>
          <div className="spark">{Array.from({ length: 16 }).map((_, i) => <i key={i} style={{ height: 16 + ((i * 17) % 44) }} />)}</div>
          <h3>{isLove ? "热门心动事件" : "热门梦想事件"}</h3>
          <ol>{ranks[bank].map((item) => <li key={item}>{item}</li>)}</ol>
          <div className="topics">{(isLove ? ["心动加剧中", "暗恋也要勇敢", "爱情银行上线"] : ["30岁前的我", "远程工作是未来吗", "DreamBig 勇敢追梦"]).map((t) => <span key={t}>#{t}</span>)}</div>
        </aside>
      </div>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState<Bank>("fat");
  const [modal, setModal] = useState<Bank | null>(null);
  return (
    <>
      <Hero />
      <main className="board">
        <section className={`card ${active === "fat" ? "active" : ""}`} onClick={() => setActive("fat")}><FatBank open={() => setModal("fat")} /></section>
        <section className={`card ${active === "love" ? "active" : ""}`} onClick={() => setActive("love")}><SocialBank bank="love" open={() => setModal("love")} /></section>
        <section className={`card ${active === "dream" ? "active" : ""}`} onClick={() => setActive("dream")}><SocialBank bank="dream" open={() => setModal("dream")} /></section>
      </main>
      <footer>
        <div><h2>欢迎来到人类交易所</h2><p>我们不交易商品。我们交易身体、关系和未来。用市场机制，把人生的不确定性变成可看见、可参与、可讨论的系统。</p><span>身体：自律与放纵</span><span>关系：情绪与不确定</span><span>未来：梦想与风险</span></div>
        <div><h2>TRADE WHAT MATTERS.</h2><p><b className="miniBlob" /> + ♥ + ☁</p><button>进入交易所</button><button>查看路演故事</button></div>
      </footer>
      <Modal bank={modal} onClose={() => setModal(null)} />
    </>
  );
}
