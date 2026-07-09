import { motion } from "framer-motion";

const blueprintModules = [
  { label: "UI", x: "18%", y: "22%" },
  { label: "API", x: "78%", y: "20%" },
  { label: "State", x: "14%", y: "58%" },
  { label: "Auth", x: "82%", y: "55%" },
  { label: "Storage", x: "22%", y: "78%" },
  { label: "Realtime", x: "74%", y: "80%" },
];

function BlueprintGrid({ dimmed = false }) {
  return (
    <div className="absolute inset-0">
      <svg
        className={`absolute inset-0 h-full w-full ${dimmed ? "opacity-30" : "opacity-55"}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={dimmed ? "heroGridDim" : "heroGridBright"}
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(96, 165, 250, 0.45)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#${dimmed ? "heroGridDim" : "heroGridBright"})`}
        />
        <line
          x1="12%"
          y1="48%"
          x2="88%"
          y2="48%"
          stroke="rgba(167, 139, 250, 0.35)"
          strokeWidth="0.5"
        />
        <line
          x1="50%"
          y1="12%"
          x2="50%"
          y2="88%"
          stroke="rgba(167, 139, 250, 0.35)"
          strokeWidth="0.5"
        />
      </svg>

      {blueprintModules.map((module) => (
        <div
          key={module.label}
          className={`absolute text-[10px] md:text-xs font-mono tracking-wider ${
            dimmed ? "text-blue-300/50" : "text-blue-300/90"
          }`}
          style={{ left: module.x, top: module.y }}
        >
          {module.label}
        </div>
      ))}
    </div>
  );
}

export default function SpotlightLayer({ blueprintMask, glow, visible }) {
  return (
    <>
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-25"
        aria-hidden="true"
      >
        <BlueprintGrid dimmed />
      </div>

      <motion.div
        className="absolute inset-0 pointer-events-none z-[1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 0.35 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ background: glow }}
        aria-hidden="true"
      />

      <motion.div
        className="absolute inset-0 pointer-events-none z-[1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          maskImage: blueprintMask,
          WebkitMaskImage: blueprintMask,
        }}
        aria-hidden="true"
      >
        <BlueprintGrid />
      </motion.div>
    </>
  );
}
