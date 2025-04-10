import { useRef } from "react";

import { useInView, motion } from "framer-motion";

type MaskTextProps = {
  phrases: string[];
  size?: string;
};

export function MaskText({ phrases, size }: MaskTextProps) {
  const body = useRef(null);

  const isInView = useInView(body, { once: true, margin: "-15%" });

  const animation = {
    initial: { y: "100%" },

    enter: (i: any) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  return (
    <div ref={body} className={`text-[${size}]`}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className="overflow-hidden">
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={isInView ? "enter" : ""}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
