'use client'

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GAListener() {
    const pathname = usePathname();

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).gtag("config", "G-GMTSQ2EDLY", {
            page_path: pathname,
        })
    }, [pathname]);

    return null;
}
