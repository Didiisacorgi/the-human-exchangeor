export default function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-pink-500/35 px-4 py-5 sm:px-6 lg:px-8">
      <div className="scanline" />
      <div className="mx-auto flex max-w-[1500px] flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="pixel-logo">
            <span className="pixel-blob" />
            <span className="pixel-heart">♥</span>
            <span className="pixel-cloud">☁</span>
          </div>
          <div>
            <p className="font-pixel text-sm uppercase text-pink-400">Human Exchange System</p>
            <h1 className="mt-2 font-pixel text-4xl leading-none text-white sm:text-6xl lg:text-7xl">
              THE HUMAN EXCHANGE
            </h1>
            <p className="mt-3 text-2xl font-black text-white sm:text-3xl">人类无法控制的东西，都可以被交易。</p>
            <p className="mt-2 text-sm uppercase tracking-[.22em] text-white/60">
              Trade what matters: body, love, and future.
            </p>
          </div>
        </div>

        <div className="grid gap-3 text-sm font-bold text-white/90">
          <p><span className="mr-2 text-pink-400">◆</span>把不确定性变成资产</p>
          <p><span className="mr-2 text-violet-400">◆</span>让每个人都能参与定价</p>
          <p><span className="mr-2 text-amber-300">◆</span>在交易中看清自己的人生</p>
        </div>
      </div>
    </header>
  );
}
