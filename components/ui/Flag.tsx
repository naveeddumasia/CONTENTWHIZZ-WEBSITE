const FLAGS: Record<string, { code: string; label: string }> = {
  in: { code: "in", label: "India" },
  ae: { code: "ae", label: "UAE" },
  gb: { code: "gb", label: "UK" },
};

export default function Flag({ country, size = 16 }: { country: keyof typeof FLAGS; size?: number }) {
  const { code, label } = FLAGS[country];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://flagcdn.com/w20/${code}.png`}
      alt={label}
      width={size}
      height={Math.round(size * 0.67)}
      style={{ display: "inline", verticalAlign: "middle", borderRadius: 2 }}
    />
  );
}
