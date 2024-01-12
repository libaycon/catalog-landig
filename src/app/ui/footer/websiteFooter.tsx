import Link from "next/link";
import { footerLinks, socialLinks } from "@/static_data/footer";
import Image from "next/image";

const WebsiteFooter = () => {

    return (
        <div className="container m-auto px-4 web-tablet:px-8">
            <div className="flex flex-col items-center tablet:items-start tablet:flex-row justify-between gap-8 py-16 border-t-1 border-b-1 border-solid border-[#ffffff26]">
                <Link href={"#"}>
                    <div>
                        <Image src="https://res.cloudinary.com/dppta0r5e/image/upload/v1698169984/static/301038958_1129201011010784_7027459507250299626_n-removebg-preview_pn3dwk.png" width={200} height={200} alt="logo" priority/>
                    </div>
                </Link>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] justify-items-center text-center mobile:text-start mobile:justify-items-start gap-8 web-sm:justify-itmes-center web-opt:justify-items-end w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-4 [&>div>span]:text-lg [&>div>span]:font-semibold [&>div>ul]:flex [&>div>ul]:flex-col [&>div>ul]:gap-2">
                    {footerLinks.map((footerLink, index) => (
                        <div key={index}>
                            <span>
                                {footerLink.title}
                            </span>
                            <ul>
                                {footerLink.list.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.href}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col-reverse gap-4 items-center tablet:flex-row tablet:justify-between tablet:items-end py-7">
                <span className="text-tiny text-center tablet:text-start tablet:text-sm">
                    Copyrigth © {new Date().getFullYear()} Importación Digital.| Todos los derechos reservados.
                </span>
                <ul className="flex flex-row gap-4">
                    {socialLinks.map((socialLink, index) => (
                        <li key={index}>
                            <Link href={socialLink.href} className="hover:text-secondary">
                                <socialLink.icon />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default WebsiteFooter;