import { useRef } from "react";

import { useInView, motion } from "framer-motion";

type MaskTextProps = {
  phrases: string[];
  className?: string;
  isCard?: boolean;
};

export function MaskText({ phrases, ...rest }: MaskTextProps) {
  const body = useRef(null);

  const isInView = useInView(body, { once: true, margin: "-5%" });

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
    <motion.div ref={body} {...rest}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className="overflow-hidden">
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={isInView ? "enter" : ""}
              {...rest}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </motion.div>
  );
}
