import React from 'react';
import { Link } from 'react-router-dom';
import Parent from "./UI/Parent";
import List from "./UI/List";
import OrdersButton from "./UI/OrdersButton";

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <Parent className="toppings">
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <List key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{ topping }</span>
            </List>
          )
        })}
      </ul>

      <Link to="/order">
        <OrdersButton>
          Order
        </OrdersButton>
      </Link>

    </Parent>
  )
}

export default Toppings;