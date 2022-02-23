import React from 'react';
import {motion} from "framer-motion"


const Parent = ({children, className, extraTransition}) => {
    const parentAni = {
        hidden: {
            x: "100vw",
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 0.5,
                type: "spring",
                stiffness: 120,
                ...extraTransition
            }
        },
        exit: {
            x: "-100vw",
            transition: {
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.div
            className={`container ${className}`}
            variants={parentAni}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {children}
        </motion.div>
    );
};

export default Parent;
