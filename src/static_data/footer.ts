import { FooterLinks, SocialLinks } from "@/types/static_types";
import FacebookIcon from "@/app/ui/icons/facebook";
import InstagramIcon from "@/app/ui/icons/instagram";
import LinkedinIcon from "@/app/ui/icons/linkedin";

export const footerLinks : FooterLinks[] = [
    { 
        title: "Empresa", 
        list: [{ name: "Sobre Importación Digital", 
        href: "#" }] 
    },
    { 
        title: "Mapa de Sitio", 
        list: [
            { name: "Inicio", href: "#" }, 
            { name: "Equipos", href: "#" }, 
            { name: "Servicios", href: "#" }, 
            { name: "Contacto", href: "#" }
        ] 
    },
    { 
        title: "Productos", 
        list: [
            { name: "Fotocopiadoras", href: "#" }, 
            { name: "Multifuncionales", href: "#" }, 
            { name: "Escáneres", href: "#" }, 
            { name: "Plotters", href: "#" }, 
            { name: "Suministros", href: "#" }, 
            { name: "Repuestos", href: "#" }
        ] 
    },
]

export const socialLinks : SocialLinks[] = [
    { 
        name: "Facebook", 
        href: "https://www.facebook.com/ImportacionDigital", 
        icon: FacebookIcon
    },
    { 
        name: "Instagram", 
        href: "https://www.instagram.com/importaciondigital/", 
        icon: InstagramIcon
    },
    { 
        name: "Linkedin", 
        href: "https://www.linkedin.com/company/importacion-digital", 
        icon: LinkedinIcon
    }
]