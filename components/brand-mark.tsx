type BrandMarkProps = {
  className?: string;
};

const dots = [
  "left-0 top-1/2 -translate-y-1/2",
  "left-[12%] top-[16%]",
  "left-1/2 top-0 -translate-x-1/2",
  "right-[12%] top-[16%]",
  "right-0 top-1/2 -translate-y-1/2",
  "right-[12%] bottom-[16%]",
  "left-1/2 bottom-0 -translate-x-1/2",
  "left-[12%] bottom-[16%]"
];

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <div className={`relative aspect-square w-full ${className}`}>
      <div className="absolute inset-[18%] rounded-full bg-gradient-to-br from-forest-200 via-forest-400 to-forest-700 opacity-22 blur-md" />
      <div className="absolute inset-[24%] rounded-full border-[18px] border-forest-400/85" />
      <div className="absolute inset-[34%] rounded-full bg-white" />
      {dots.map((position, index) => (
        <span
          key={position}
          className={`absolute h-[18%] w-[18%] rounded-full bg-gradient-to-br ${
            index % 3 === 0
              ? "from-forest-200 to-forest-400"
              : index % 3 === 1
                ? "from-forest-300 to-forest-600"
                : "from-forest-400 to-forest-800"
          } ${position}`}
        />
      ))}
    </div>
  );
}
