import React from "react";
import Button from "../Button/Button";
import classes from "../ErrorModal/ErrorModal.module.css";
import Card from "../Card";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.dismissModal} />
      {/* The entire header, body and footer wrapped in a card */}
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        {/* The body */}
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button type="button" onClick={props.dismissModal}>
            Okay
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
