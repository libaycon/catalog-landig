'use client';
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import MediaQueryProvider from "@/contexts/react/mediaQuery";


function Providers({ children } : {children: React.ReactNode}) {
    return (
        <NextUIProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem={true}
                themes={['dark', 'light', 'system']}
                storageKey="app-theme"
            >
                <MediaQueryProvider>
                    {children}
                </MediaQueryProvider>
            </ThemeProvider>
        </NextUIProvider>
    )
}

export default Providers;