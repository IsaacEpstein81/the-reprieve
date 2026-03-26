import { ReactNode } from "react";

type SurfaceCardProps = {
  children: ReactNode;
  className?: string;
};

export function SurfaceCard({ children, className = "" }: SurfaceCardProps) {
  return (
    <div
      className={`rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-panel backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}
