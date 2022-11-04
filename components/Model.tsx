import styles from "../styles/Model.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Model({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          onClick={() => setOpen(false)}
          className={styles.modelBackdrop}
        >
          <motion.div className={styles.modelContentWrapper}>
            <motion.div className={styles.modelContent}>{children}</motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
