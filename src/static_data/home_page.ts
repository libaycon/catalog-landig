import {
    ServiceEnvirontment,
    Service,
    ContactInfo,
    SlideFeatures,
    SuccessCases
} from "@/types/static_types";
import { MapPinIcon, PaperAirplaneIcon, PhoneArrowUpRightIcon } from "@heroicons/react/24/solid";


export const serviceEnvirontments: ServiceEnvirontment[] = [
    {
        title: "Sectores",
        list: [
            "Constructoras",
            "Minería",
            "Educación",
            "Gobierno",
            "Salud",
            "Telecomunicaciones",
            "Bancos"
        ]
    },
    {
        title: "Servicios",
        list: [
            "Venta de Fotocopiadoras",
            "Alquiler de fotocopiadoras",
            "Venta de repuestos",
            "Venta de insumos",
            "Soporte Técnico",
            "Capacitación de usuarios"
        ]
    },
];

export const services: Service[] = [
    { label: "Alquilar un Equipo", value: "alquilar" },
    { label: "Comprar un Equipo", value: "comprar" },
    { label: "Coprar un Repuesto", value: "repuesto" },
    { label: "Otros", value: "otros" },
];

export const contactInfos: ContactInfo[] = [
    { title: 'Address', text: "Av. Los Precursores 1245, San Miguel", icon: MapPinIcon },
    { title: 'Phone number', text: "+51 999 999 999", icon: PhoneArrowUpRightIcon },
    { title: 'Email', text: "atencion@digitalimoprt.com", icon: PaperAirplaneIcon },
]

export const slideFeatures: SlideFeatures = {
    equipment: "Fotocopiadora Multifuncional",
    features: [
        "Copiado",
        "Impresión",
        "Escaneo",
        "Correo electrónico",
        "Guardado en carpeta"
    ],
    image: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697803476/static/multifuncionale_serie.50i-removebg-preview_ecbpal.png",
}

//when modifying this object also modify the width of the element in css cal(xxxpx/2). for that inspect the elements in the browser.
export const successCases: SuccessCases[] = [
    {
        name: "Clinica internacional", 
        image: "https://res.cloudinary.com/dppta0r5e/image/upload/v1701813468/static/images_jpcbym.png"
    },
    {
        name: "Colegio salesiano",
        image: "https://res.cloudinary.com/dppta0r5e/image/upload/v1701811819/static/2BPZ3wF1_400x400_evbnqk.jpg"
    },
    {
        name: "Antamina",
        image: "https://res.cloudinary.com/dppta0r5e/image/upload/v1701813751/static/images_woyqia.jpg"
    },
    {
        name: "Pluspetrol",
        image: "https://res.cloudinary.com/dppta0r5e/image/upload/v1701811528/static/logo-vector-pluspetrol_chk67c.jpg"
    },
    {
        name: "El Comercio",
        image: "https://res.cloudinary.com/dppta0r5e/image/upload/v1701813631/static/unnamed-removebg-preview_nmwpqk.png"
    }
]