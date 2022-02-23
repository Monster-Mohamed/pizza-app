import React from 'react';
import {motion} from "framer-motion"
import goAudio from "../../assets/continue.mp3";
import {Link} from "react-router-dom";
import Loader from "../Loader";

const buttonAni = {
    hover: {
        scale: 1.2,
        transition: {
            yoyo: Infinity,
            ease: "easeOut",
            duration: 0.4
        }
    }
}

export const goNext = () => {
    new Audio(goAudio).play();
};

const MainButton = ({className, children, to}) => {

    return (
        <>
            <Link to={to}>
                <motion.button
                    className={className}
                    variants={buttonAni}
                    onClick={goNext}
                    whileHover="hover"
                >
                    {children}
                </motion.button>
            </Link>
            <Loader/>
        </>
    );
};

export default MainButton;
