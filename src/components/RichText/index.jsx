const emphasisStyles = {
  bold: "font-bold",
  blue: "font-bold text-blue-400",
  purple: "font-bold text-purple-400",
  gradient:
    "font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",
};

export default function RichText({ segments }) {
  return (
    <>
      {segments.map((segment, index) => {
        const className = emphasisStyles[segment.emphasis] ?? "";

        if (!className) {
          return <span key={index}>{segment.text}</span>;
        }

        return (
          <span key={index} className={className}>
            {segment.text}
          </span>
        );
      })}
    </>
  );
}
