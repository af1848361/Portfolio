import { motion } from "framer-motion";

const heroLinkStyles = {
  linkedin:
    "flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 h-12 rounded-full transition-colors whitespace-nowrap",
  github:
    "flex items-center justify-center gap-2 bg-gray-950 hover:bg-black px-6 h-12 rounded-full transition-colors whitespace-nowrap",
  outline:
    "flex items-center justify-center gap-2 border border-purple-500 hover:bg-purple-500 px-6 h-12 rounded-full transition-colors whitespace-nowrap",
};

export default function HeroContent({
  name,
  title,
  subtitle,
  badge,
  heroLinks,
}) {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.3 }}
      className="text-center max-w-3xl w-full relative z-10"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
        {name.line1}
        <br className="md:hidden" />
        {name.line2}
      </h1>

      <p className="text-xl md:text-2xl mb-3 text-blue-300">{title}</p>

      {subtitle && (
        <p className="text-sm md:text-base text-gray-300 mb-5 max-w-xl mx-auto leading-relaxed px-2">
          {subtitle}
        </p>
      )}

      {badge && (
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-gray-800/70 border border-gray-600/50 text-sm text-gray-200">
          <span className="w-2 h-2 rounded-full bg-green-400" />
          {badge}
        </div>
      )}

      <div className="flex flex-wrap justify-center items-center gap-4">
        {heroLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.isDownload ? undefined : "_blank"}
            rel={link.isDownload ? undefined : "noopener noreferrer"}
            download={link.isDownload ? link.downloadName : undefined}
            className={heroLinkStyles[link.variant]}
          >
            {link.icon}
            {link.label}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
