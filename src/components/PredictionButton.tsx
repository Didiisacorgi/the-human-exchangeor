import type { PredictionChoice } from "../types";

interface PredictionButtonProps {
  choice: PredictionChoice;
  odds: string;
  selected?: boolean;
  color: "pink" | "purple" | "blue";
  onSelect: (choice: PredictionChoice) => void;
}

const colorClasses = {
  pink: "border-pink-400 text-pink-500 bg-pink-50/80",
  purple: "border-violet-400 text-violet-600 bg-violet-50/80",
  blue: "border-sky-400 text-sky-600 bg-sky-50/80",
};

export default function PredictionButton({
  choice,
  odds,
  selected,
  color,
  onSelect,
}: PredictionButtonProps) {
  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        onSelect(choice);
      }}
      className={`pixel-button h-9 flex-1 border px-3 font-pixel text-xs transition ${
        selected
          ? "translate-y-0.5 bg-lime-300 text-black shadow-[0_0_18px_rgba(190,242,100,.75)]"
          : colorClasses[color]
      }`}
    >
      {selected ? "已参与预测" : `${choice} ${odds}`}
    </button>
  );
}
