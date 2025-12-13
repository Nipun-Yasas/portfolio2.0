"use client";

import { useEffect, useState } from "react";
import Preloader from "./Preloader";

const ClientLoader = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setLoading(false);
        };

        // Check if document is already loaded
        if (document.readyState === "complete") {
            setLoading(false);
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, []);

    return (
        <>
            {loading ? (
                <Preloader />
            ) : (
                <>
                    {children}
                </>
            )}
        </>
    );
};

export default ClientLoader;
