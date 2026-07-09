export default function HeroBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[520px] h-[420px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl" />
    </div>
  );
}
