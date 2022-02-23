import React from 'react';
import {motion, useCycle} from "framer-motion";

const loaderAni = {
    firstAnimation: {
        background: "rgb(88,140,182)",
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5,
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
            }
        }
    },
    secondAnimation: {
        background: "rgba(236, 97, 97, 0.94)",
        y: [0, -40],
        x: 0,
        transition: {
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: "easeOut"
            }
        }
    }
}
const ballChanger = {
    hover: {
        background: ["rgba(236, 97, 97, 0.94)", "rgb(88,140,182)"],
        x: [-2, 2],
        scale: [1, 1.2],
        transition: {
            x: {
                duration: 0.1,
                yoyo: Infinity
            },
            scale: {
                duration: 0.5,
                yoyo: Infinity
            },
            background: {
                duration: 1,
                yoyo: Infinity
            }
        }
    }
}

const Loader = () => {
    const [animation, cycleAnimation] = useCycle(
        "firstAnimation", "secondAnimation"
    );
    return (
        <>
            <motion.div
                className="loader"
                variants={loaderAni}
                animate={animation}
            >
            </motion.div>
            <motion.div
                variants={ballChanger}
                whileHover="hover"
                className="btn-loader"
                onClick={() => cycleAnimation()}
            > Change Ball
            </motion.div>
        </>
    );
};

export default Loader;
