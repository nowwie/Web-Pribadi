import React from "react";
import classes from "../../styles/form.module.css";

const Form = () => {
  const submitHandler = () => {
    e.preventDefault();
  };
  return (
    <form className={`${classes.form}`} onSubmit={submitHandler}>
     
    </form>
  );
};

export default Form;
