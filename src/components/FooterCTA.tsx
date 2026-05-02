export default function FooterCTA() {
  return (
    <footer className="mx-auto grid max-w-[1500px] gap-4 px-4 pb-8 pt-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
      <section className="pixel-panel border border-pink-500/40 bg-black/60 p-5">
        <h2 className="font-pixel text-2xl text-pink-300">欢迎来到人类交易所</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75">
          我们不交易商品。我们交易身体、关系和未来。用市场机制，把人生的不确定性变成可看见、可参与、可讨论的系统。
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          {["身体：自律与放纵", "关系：情绪与不确定", "未来：梦想与风险"].map((tag) => (
            <span className="summary-tag" key={tag}>{tag}</span>
          ))}
        </div>
      </section>
      <section className="pixel-panel border border-violet-400/40 bg-black/60 p-5">
        <p className="font-pixel text-xl text-white">TRADE WHAT MATTERS.</p>
        <div className="mt-4 flex items-center gap-4 font-pixel text-lg text-white">
          <span className="pixel-mini-blob" /> + <span className="text-4xl text-pink-400">♥</span> + <span className="text-4xl text-violet-300">☁</span>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <button className="pixel-button border border-pink-400 bg-pink-500 px-5 py-3 font-pixel text-sm text-white">
            进入交易所
          </button>
          <button className="pixel-button border border-white/35 bg-white/10 px-5 py-3 font-pixel text-sm text-white">
            查看路演故事
          </button>
        </div>
      </section>
    </footer>
  );
}
