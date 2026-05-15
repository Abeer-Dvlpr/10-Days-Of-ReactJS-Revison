import { useState, useEffect } from "react";



const useWindowWidth = () => {

    const [width, setWidth] = useState(() => {
        if (typeof window !== "undefined") {
            return window.innerWidth
        }
        return 1024
    });

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    return width;
}

export default useWindowWidth