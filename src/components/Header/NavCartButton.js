import React, { useContext, useEffect, useState } from "react";
import classes from "./NavCartButton.module.css";
import CartContext from "../store/cartcontext";

const NavCartButton = (props) => {
 
  const cartCtx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);


  
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
 


  const btnBump = `${classes.cart__button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);

    const bumpTimer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(bumpTimer);
    };
  }, [items]);

  return (
    <div onClick={props.onClick} className={btnBump}>
      <i className="bi bi-cart"></i>
      Cart
      <div className={classes.badge}>{numberOfCartItems}</div>
    </div>
  );

};

export default NavCartButton;
