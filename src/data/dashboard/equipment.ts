import { Column, Equipment } from "@/types/dashboard/equipement"


const columns: Column[] = [
    { name: "Equipo", uid: "equipment" },
    { name: "Descripción", uid: "description" },
    //{ name: "Estado", uid: "status" },
    { name: "Acciones", uid: "actions" }
]

const mobileColumns: Column[] = columns.filter(column => column.uid !== "description")

const equipments:Equipment[] = [
    {
        id: 1,
        code: "0001",
        image: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697803476/static/multifuncionale_serie.50i-removebg-preview_ecbpal.png",
        gallery: [],
        name: "Konica Minolta bizhub C450i",
        brand: "Konica Minolta",
        model: "bizhub C450i",
        description: "La bizhub C450i de Konica Minolta es un equipo multifuncional de alto rendimiento que ofrece impresión en color de alta calidad y una amplia gama de funciones de acabado opcionales para aumentar la productividad y la flexibilidad. La bizhub C450i es la sucesora de la bizhub C458 y la bizhub C458e, y está disponible en dos versiones: una versión de 45 ppm y una versión de 55 ppm.",
        status: "Disponible"
    },
    {
        id: 2,
        code: "0002",
        image: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697844354/static/canon-imagerunner-advance-dx-c5840i-removebg-preview_msxcmb.png",
        gallery: [],
        name: "Canon imageRUNNER ADVANCE DX C5840i",
        brand: "Canon",
        model: "imageRUNNER ADVANCE DX C5840i",
        description: "La imageRUNNER ADVANCE DX C5840i de Canon es un equipo multifuncional de alto rendimiento que ofrece impresión en color de alta calidad y una amplia gama de funciones de acabado opcionales para aumentar la productividad y la flexibilidad. La imageRUNNER ADVANCE DX C5840i es la sucesora de la imageRUNNER ADVANCE C5535i y la imageRUNNER ADVANCE C5540i, y está disponible en dos versiones: una versión de 35 ppm y una versión de 40 ppm.",
        status: "Alquilado"
    },
    {
        id: 3,
        code: "0003",
        image: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697844355/static/ricoh-im-430f-removebg-preview_pltdmy.png",
        gallery: [],
        name: "Ricoh IM 430F",
        brand: "Ricoh",
        model: "IM 430F",
        description: "La Ricoh IM 430F es un equipo multifuncional de alto rendimiento que ofrece impresión en color de alta calidad y una amplia gama de funciones de acabado opcionales para aumentar la productividad y la flexibilidad. La Ricoh IM 430F es la sucesora de la Ricoh MP C4504exSP y la Ricoh MP C6004exSP, y está disponible en dos versiones: una versión de 45 ppm y una versión de 60 ppm.",
        status: "Disponible"
    },
/*     {
        id: 4,
        code: "0004",
        image: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697844354/static/fotocopiadora-konica-minolta-bizhub-c450i-removebg-preview_coqwp7.png",
        gallery: [],
        name: "",
        brand: "Marca 4",
        model: "Modelo 4",
        description: "Descripción 4",
        status: "Agotado"
    },
    {
        id: 5,
        code: "0005",
        image: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697844354/static/canon-imagerunner-advance-dx-c5840i-removebg-preview_msxcmb.png",
        gallery: [],
        name: "Equipo 5",
        brand: "Marca 5",
        model: "Modelo 5",
        description: "Descripción 5",
        status: "Disponible"
    },
    {
        id: 6,
        code: "0006",
        image: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697844354/static/canon-imagerunner-advance-dx-c5840i-removebg-preview_msxcmb.png",
        gallery: [],
        name: "Equipo 6",
        brand: "Marca 6",
        model: "Modelo 6",
        description: "Descripción 6",
        status: "Disponible"
    },
    {
        id: 7,
        code: "0007",
        image: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697844355/static/ricoh-im-430f-removebg-preview_pltdmy.png",
        gallery: [],
        name: "Equipo 7",
        brand: "Marca 7",
        model: "Modelo 7",
        description: "Descripción 7",
        status: "Disponible"
    },
    {
        id: 8,
        code: "0008",
        image: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697844354/static/fotocopiadora-konica-minolta-bizhub-c450i-removebg-preview_coqwp7.png",
        gallery: [],
        name: "Equipo 8",
        brand: "Marca 8",
        model: "Modelo 8",
        description: "Descripción 8",
        status: "Disponible"
    },
    {
        id: 9,
        code: "0009",
        image: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697844354/static/canon-imagerunner-advance-dx-c5840i-removebg-preview_msxcmb.png",
        gallery: [],
        name: "Equipo",
        brand: "Marca",
        model: "Modelo",
        description: "Descripción",
        status: "Agotado"
    }, */
]

export { columns, mobileColumns, equipments };