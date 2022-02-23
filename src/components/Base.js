import React from 'react';
import { Link } from 'react-router-dom';
import Parent from "./UI/Parent";
import OrdersButton from "./UI/OrdersButton";
import List from "./UI/List";

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <Parent className="base">

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <List key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </List>
          )
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <OrdersButton>Next</OrdersButton>
          </Link>
        </div>
      )}

    </Parent>
  )
}

export default Base;