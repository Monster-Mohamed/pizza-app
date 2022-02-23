import React from 'react';
import {motion} from "framer-motion"
import {goNext} from "./MainButton";

const btnAni = {
    hidden: {
        x: "100vw",
        scale: 0.9
    },
    visible: {
        x: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 120
        }
    },
    hover: {
        scale: 1.08
    }
}

const OrdersButton = ({children}) => {
    return (
        <motion.button
            variants={btnAni}
            onClick={goNext}
            initial="hidden"
            animate="visible"
            whileHover="hover"
        >
            {children}
        </motion.button>
    );
};

export default OrdersButton;
