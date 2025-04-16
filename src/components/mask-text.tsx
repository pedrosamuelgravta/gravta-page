"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface MaskTextProps {
  phrases: string[];
  className?: string;
  isCard?: boolean;
}

export function MaskText({
  phrases,
  className = "",
  isCard = false,
}: MaskTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {phrases.map((phrase, index) => (
        <div key={index} className="overflow-hidden ">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: isCard ? 0.1 : index * 0.1,
              ease: "easeOut",
            }}
            className="whitespace-pre-line"
          >
            {/<[a-z][\s\S]*>/i.test(phrase) ? (
              <span dangerouslySetInnerHTML={{ __html: phrase }} />
            ) : (
              phrase
            )}
          </motion.p>
        </div>
      ))}
    </div>
  );
}
