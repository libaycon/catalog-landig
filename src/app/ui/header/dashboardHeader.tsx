import Link from "next/link";


const DashboardHeader = ():JSX.Element => {
    const navLinks = [
        {to: "/dashboard/equipments", label: "Equipos"},
        {to: "/dashboard/rentals", label: "Alquileres"},
        {to: "/dashboard/parts", label: "Repuestos"},
        {to: "/dashboard/services", label: "Servicios"},
        {to: "/dashboard/others", label: "Otros"},
    ];

    return (
        <header className="container m-auto h-20">
            <nav className="flex flex-row justify-start gap-8 items-center w-full h-full">
                <div><Link href={"/dashboard"} >LOGO</Link></div>
                <div>
                    <ul className="flex flex-row gap-4 [&>li>a]:relative [&>li>a]:inline-flex [&>li>a]:font-semibold [&>li>a]:text-md [&>li>a]:px-2">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.to} className="link-decorated hover:text-primary">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>

                </div>
            </nav>
        </header>
    );
}

export default DashboardHeader;