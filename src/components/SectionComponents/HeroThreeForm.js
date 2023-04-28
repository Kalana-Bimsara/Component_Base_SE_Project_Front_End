import React, { useEffect, useRef, useState } from "react";
import Input from "../Ui/Input";
import TheButton from "../Ui/TheButton";
import Tooltip from "../Ui/Tooltip";
import classes from "../Ui/Tooltip.module.css";

const HeroThreeForm = (props) => {

  const inputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);



  const onSubmitHandler = (event) => {

    event.preventDefault();



    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;



    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }



  };



  const ontooltipHandler = () => {
    setShowTooltip(true);
  };

  const tipShow = `${showTooltip ? classes.show : ""}`;

  useEffect(() => {
    if (showTooltip === false) {
      return;
    }

    const toolTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 1000);

    return () => {
      clearTimeout(toolTimer);
    };
  }, [showTooltip]);



  return (
    <>
      <Tooltip className={tipShow} />
      <form onSubmit={onSubmitHandler}>
        <Input
          ref={inputRef}
          input={{
            id: Math.random() * 10,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <TheButton type="submit" onClick={ontooltipHandler}>
          <i className="bi bi-plus"></i> Add
        </TheButton>
        {}
        {!amountIsValid && (
          <p>Input is invalid, Pleae Input a amount between 1 and 5</p>
        )}
        {}
      </form>
    </>
  );
};


export default HeroThreeForm;

