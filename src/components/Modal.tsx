interface ModalProps {
  title: string;
  subtitle: string;
  accent: string;
  open: boolean;
  onClose: () => void;
}

export default function Modal({ title, subtitle, accent, open, onClose }: ModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="pixel-panel max-w-lg border-2 border-white/20 bg-[#120719] p-5 shadow-[0_0_60px_rgba(255,63,139,.32)]">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="font-pixel text-xs uppercase tracking-[.16em]" style={{ color: accent }}>
              NEW MARKET
            </p>
            <h2 className="mt-2 font-pixel text-2xl text-white">{title}</h2>
            <p className="mt-2 text-sm text-white/70">{subtitle}</p>
          </div>
          <button className="pixel-button h-9 w-9 border border-white/25 text-white" onClick={onClose}>
            X
          </button>
        </div>

        <div className="space-y-3">
          <input
            className="pixel-input"
            placeholder="写下一个不可完全控制的事件..."
            defaultValue=""
          />
          <div className="grid grid-cols-2 gap-3">
            <input className="pixel-input" placeholder="YES 赔率" defaultValue="1.88" />
            <input className="pixel-input" placeholder="NO 赔率" defaultValue="2.16" />
          </div>
          <textarea
            className="pixel-input min-h-24 resize-none"
            placeholder="补充背景，让市场理解你的不确定性。"
          />
        </div>

        <button
          onClick={onClose}
          className="pixel-button mt-5 w-full border border-lime-300 bg-lime-300 px-4 py-3 font-pixel text-sm text-black"
        >
          发布到人类交易所
        </button>
      </div>
    </div>
  );
}
