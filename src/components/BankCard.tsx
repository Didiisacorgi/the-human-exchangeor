import type { ReactNode } from "react";
import type { BankId } from "../types";

interface BankCardProps {
  id: BankId;
  activeBank: BankId;
  onSelect: (id: BankId) => void;
  children: ReactNode;
}

export default function BankCard({ id, activeBank, onSelect, children }: BankCardProps) {
  const isActive = id === activeBank;

  return (
    <section
      onClick={() => onSelect(id)}
      className={`bank-card ${isActive ? "bank-card-active" : ""}`}
    >
      {children}
    </section>
  );
}
