import React from 'react';
import Parent from "./UI/Parent";
import {motion} from "framer-motion"
import MainButton from "./UI/MainButton";
import Loader from "./Loader";

const childHeading = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    },
}

const Order = ({ pizza }) => {
  return (
    <Parent className="order" extraTransition={{
        when: "beforeChildren",
        mass: "0.5",
        damping: 8,
        staggerChildren: 1
    }}>
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childHeading}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childHeading}>
          {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
      <MainButton to="/">
          Create Another Pizza
      </MainButton>
    </Parent>
  )
}

export default Order;