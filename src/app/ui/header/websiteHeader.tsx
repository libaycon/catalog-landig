import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/static_data/header";
import Image from "next/image";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";


const WebsiteHeader = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleClose = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            isOpen && !target.closest(".xmobile") && setIsOpen(false);
        }
        isOpen && window.addEventListener("click", handleClose);
        return () => window.removeEventListener("click", handleClose);
    }, [isOpen]);


    return (
        <header className="container m-auto h-20">
            <nav className="relative flex flex-row justify-between items-center w-full h-full z-10">
                <div className="">
                    <Link href='/'>
                        <Image src="https://res.cloudinary.com/dppta0r5e/image/upload/v1698169984/static/301038958_1129201011010784_7027459507250299626_n-removebg-preview_pn3dwk.png" alt="logo" width={120} height={50} />
                    </Link>
                </div>
                <div className="hidden web-md:block">
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
                <div className="hidden web-md:block">
                    <Link href="#contact" className="relative link-decorated font-semibold text-md px-2 hover:text-primary">
                        Contactar
                    </Link>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="xmobile web-md:hidden">
                    <Bars3Icon className="w-7 h-7" />
                </button>
            </nav>
                <MobileHeader setIsOpen={setIsOpen} className={`fixed ${!isOpen ? 'hidden' : 'block'} web-md:hidden min-h-screen top-0 left-0 right-0 z-20 backdrop-blur-sm`} />
        </header>
    );
}

function MobileHeader({ setIsOpen, className }: { setIsOpen: (value: boolean) => void, className: string }): JSX.Element {

    return (
        <div className={className}>
            <div className="relative flex flex-col w-full mobile:w-max bg-bg-primary h-screen justify-between p-12 xmobile">
                <ul className="flex flex-col gap-4 [&>li>a]:relative [&>li>a]:inline-flex [&>li>a]:font-semibold [&>li>a]:text-md [&>li>a]:px-2" onClick={(e) => e.stopPropagation()}>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.to} className="link-decorated hover:text-primary" onClick={() => setIsOpen(false)}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button className="absolute right-3 top-3 rounded-full bg-primary p-1 hover:scale-105" onClick={() => setIsOpen(false)}>
                    <XMarkIcon className="w-5 h-5 text-primary-foreground" />
                </button>
                <Link href="#contact" className="relative w-max link-decorated font-semibold text-md px-2 hover:text-primary" onClick={() => setIsOpen(false)}>
                    Contactar
                </Link>
            </div>

        </div>
    )
}

export default WebsiteHeader;