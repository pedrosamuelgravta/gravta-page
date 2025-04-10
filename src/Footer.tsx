import { motion } from "framer-motion";

export const Footer = ({ show }: { show: boolean }) => {
  console.log("show:", show);
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={show ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-0 left-0 w-full lg:px-10 xl:px-12 z-50 bg-white"
    >
      {/* borda animada */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={show ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="origin-left border-t border-black w-full"
      >
        <motion.div
          initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
          animate={
            show
              ? { y: 0, opacity: 1, filter: "blur(0px)" }
              : { y: 20, opacity: 0, filter: "blur(4px)" }
          }
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex flex-row items-center justify-between h-10 text-black px-4"
        >
          <p>© 2025 Gravta LLC. All Rights Reserved.</p>
          <p>Press</p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};
