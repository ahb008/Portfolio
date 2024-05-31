import { useEffect, useState } from 'react';

export default function useMousePos() {
    const [mousePos, setMousePos] = useState({x:0, y:0});

    const updateMousePos = (e: MouseEvent) => {
        setMousePos({x:e.clientX, y:e.clientY});
    }

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePos);
        // Clean up
        return () => {
            window.removeEventListener("mousemove", updateMousePos);
        }
    }, []);

    return mousePos;
};