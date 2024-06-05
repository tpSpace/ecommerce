import { useEffect, useState } from "react";

export const useOrigin = () => {
    const [mouted, setIsMounted] = useState(false);
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!mouted) {
        return '';
    }

    return origin
}