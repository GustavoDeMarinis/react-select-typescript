import React from "react";
import downIcon from "../../assets/downIcon.svg";
import styles from "./Input.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { IInputProps as Iprops } from "../../interfaces/interfaces";
import { motion } from "framer-motion";

type Inputs = {
  item: string;
};

const Input: React.FC<Iprops> = ({
  setItems,
  setFilter,
  setDropdown,
  items,
  dropdown,
}) => {
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setItems([...items, data.item]);
    setDropdown(true);
    setFilter("");
    reset();
  };

  const { register, handleSubmit, reset } = useForm<Inputs>();
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Selecciona una opción"
          className={styles.input}
          {...register("item", {
            required: true,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              setFilter(e.target.value),
          })}
        />
        <button type="submit" hidden />
      </form>
      <button className={styles.button} onClick={() => setDropdown(!dropdown)}>
        <motion.img
          animate={{ rotate: dropdown ? 180 : 0 }}
          src={downIcon}
          alt=""
          className={styles.buttonIcon}
        />
      </button>
    </div>
  );
};

export default Input;
