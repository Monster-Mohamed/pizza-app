import React from 'react';
import {motion} from "framer-motion"

const listAni = {
    hover: {
        scale: 1.2,
        originX: 0,
        color: "rgba(236, 97, 97, 0.94)"
    }
};

const List = ({children, onClick}) => {
    return (
        <motion.li
            onClick={onClick}
            variants={listAni}
            whileHover="hover"
        >
            {children}
        </motion.li>
    );
};

export default List;
