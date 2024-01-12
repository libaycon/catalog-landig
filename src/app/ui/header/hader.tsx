'use client';

import { usePathname } from "next/navigation";
//import DashboardHeader from "./dashboardHeader";
import WebsiteHeader from "./websiteHeader";

const Header = ():JSX.Element => {
    const pathName = usePathname();
    return pathName.includes("dashboard") ? <></> : <WebsiteHeader />;
}

export default Header;