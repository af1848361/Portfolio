import { motion, useReducedMotion } from "framer-motion";

export default function HeroProfile({ src, alt }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="relative w-60 h-60 mx-auto mb-6">
        <img
          src={src}
          alt={alt}
          className="w-60 h-60 object-cover rounded-full border-2 border-gray-700/40"
        />
      </div>
    );
  }

  return (
    <div className="relative w-60 h-60 mx-auto mb-6">
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: -20, opacity: 1 }}
        transition={{ duration: 2 }}
        className="w-full h-full"
      >
        <motion.img
          animate={{
            rotate: "1turn",
            scale: [1, 1.5, 1],
            borderRadius: ["6%", "75%", "150%"],
            boxShadow: [
              "0px 0px 10px rgba(255, 255, 255, 0.2)",
              "0px 0px 20px rgba(255, 255, 255, 0.5)",
              "0px 0px 30px rgba(255, 255, 255, 0.8)",
              "0px 0px 40px rgba(255, 255, 255, 1)",
            ],
          }}
          transition={{ duration: 1.5 }}
          src={src}
          alt={alt}
          className="w-60 h-60 object-cover"
        />
      </motion.div>
    </div>
  );
}
