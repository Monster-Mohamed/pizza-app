import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"
import Parent from "./UI/Parent";
import MainButton from "./UI/MainButton";
import Loader from "./Loader";

const Home = () => {
  return (
    <Parent className="home" extraTransition={{
        when: "beforeChildren",
    }}>
      <h2>
        Welcome to Pizza Monster
      </h2>
        <MainButton to="/base">
            Create Your Pizza
        </MainButton>
    </Parent>
  )
}

export default Home;