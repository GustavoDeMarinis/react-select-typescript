import React from "react";
import { handleListofIcons } from "../../helpers/helpers";
import styles from "./Dropdown.module.scss";
import { motion } from "framer-motion";

interface IProps {
  items: string[];
  dropdown: boolean;
}

const Dropdown: React.FC<IProps> = ({ items, dropdown }) => {
  const renderList = (): JSX.Element[] => {
    return items.map((item, index) => {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={index}
          className={styles.item}
        >
          <img
            className={styles.dropdownImg}
            src={handleListofIcons(index)}
            alt=""
          />
          <p>{item}</p>
        </motion.div>
      );
    });
  };

  return (
    <>
      {dropdown && (
        <motion.div
          initial={{ height: "0rem" }}
          animate={{ height: "auto" }}
          exit={{ height: "0rem" }}
          className={styles.container}
        >
          {renderList()}
        </motion.div>
      )}
    </>
  );
};

export default Dropdown;
