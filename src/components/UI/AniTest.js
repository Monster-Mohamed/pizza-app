const testAni = {
    hidden: {
     // initial
    },
    visible: {
        // animation
        transition: {
            // the transition options
        }
    },
    hover: {
        // when hover
    }
}

<motion.div
    variants={testAni}
    initial="hidden"
    animate="visible"

    // for animation
    whileHover="hover"
>
</motion.div>