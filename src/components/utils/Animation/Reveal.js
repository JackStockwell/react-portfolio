// Imports
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Reveal({ children }) {

    // Sets the ref as null 
    const ref = useRef(null);

    // Framer motion hook, will return true once element is in view. This is what ref is persisting.
    const isInView = useInView( ref, { once: true })

    // Animation controls for Framer motion.
    const animationControls = useAnimation()

    // Is listening for inView only, if true, visible animation is played. 
    useEffect(() => {
        if (isInView) {
            animationControls.start("visible")
        }
    }, [isInView])
    
    return (
        <div ref={ref} style={{ position: "relative", overflow: "hidden"}}>
            <motion.div
                // The two animation steps, like a standard CSS animate
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 }
                }}
                // Initial state.
                initial="hidden"
                // Uses animation controls hook to use the animation.
                animate={animationControls}
                // Sets the animation duration and the delay.
                transition={{ duration: 0.5, delay: 0.25 }}
            >   
            {/* Renders the parsed children with the animation played on them */}
                {[children]}
            </motion.div>
        </div>

    )
}