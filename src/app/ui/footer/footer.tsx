'use client';
import { usePathname } from "next/navigation";
import WebsiteFooter from "./websiteFooter";
//import DashboardFooter from "./dashboardFooter";

const Footer = ():JSX.Element => {
    const pathname = usePathname();
    return pathname.includes("dashboard") ? <></> : <WebsiteFooter />;
};

export default Footer;