import { createContext, useContext, useEffect, useState, ReactNode } from 'react';


type MediaQueryContextValue = {
    smallMobile: boolean;
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
    loading: boolean;
}

type MediaQueryProps = {
    children: ReactNode;
}

const MediaQueryContext = createContext<MediaQueryContextValue>({} as MediaQueryContextValue);
export const useMediaQuery = (): MediaQueryContextValue => useContext(MediaQueryContext);

const MediaQueryProvider: React.FC<MediaQueryProps> = ({children}) => {
    const [mobile, setMobile] = useState<boolean>(false);
    const [tablet, setTablet] = useState<boolean>(false);
    const [desktop, setDesktop] = useState<boolean>(false);
    const [smallMobile, setSmallMobile] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        smallMobile || mobile || tablet || desktop ? setLoading(false) : setLoading(true);
    }, [mobile, tablet, desktop, smallMobile]);

    useEffect(() => {
        const mediaQueryDesktop = window.matchMedia("(min-width: 871px)");
        const mediaQueryTablet = window.matchMedia("(max-width: 870px)");
        const mediaQueryMobile = window.matchMedia("(max-width: 640px)");
        const mediaQuerySmallMobile = window.matchMedia("(max-width: 480px)")

        const handleMediaQuerySmallMobile = (e: MediaQueryListEvent) => setSmallMobile(e.matches);
        const handleMediaQueryMobile = (e: MediaQueryListEvent) => setMobile(e.matches);
        const handleMediaQueryTablet = (e: MediaQueryListEvent) => setTablet(e.matches);
        const handleMediaQueryDesktop = (e: MediaQueryListEvent) => setDesktop(e.matches);

        setSmallMobile(mediaQuerySmallMobile.matches);
        setMobile(mediaQueryMobile.matches);
        setTablet(mediaQueryTablet.matches);
        setDesktop(mediaQueryDesktop.matches);

        mediaQuerySmallMobile.addEventListener('change', handleMediaQuerySmallMobile);
        mediaQueryMobile.addEventListener('change', handleMediaQueryMobile);
        mediaQueryTablet.addEventListener('change', handleMediaQueryTablet);
        mediaQueryDesktop.addEventListener('change', handleMediaQueryDesktop);

        return () => {
            mediaQuerySmallMobile.removeEventListener('change', handleMediaQuerySmallMobile);
            mediaQueryMobile.removeEventListener('change', handleMediaQueryMobile);
            mediaQueryTablet.removeEventListener('change', handleMediaQueryTablet);
            mediaQueryDesktop.removeEventListener('change', handleMediaQueryDesktop);
        }
    }, []);

    return (
        <MediaQueryContext.Provider value={{
            smallMobile,
            tablet,
            mobile,
            desktop,
            loading
        }}>
            {children}
        </MediaQueryContext.Provider>
    )
}

export default MediaQueryProvider;