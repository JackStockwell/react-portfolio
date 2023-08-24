import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Props = {
    children: Element,
    width: "fit-content" | "100%"
}

export default function Reveal({ children, width = "100%"}) {
    const ref = useRef(null);
    const inView = useInView( ref, { once: true })

    const animationControls = useAnimation()

    useEffect(() => {
        if (inView) {
            animationControls.start("visible")
        }
    }, [inView])
    
    return (
        <div ref={ref} style={{position: "relative", width, overflow: "hidden"}}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={animationControls}
                transition={{ duration: 0.65, delay: 0.25 }}
            >
                {[children]}
            </motion.div>
        </div>

    )
}