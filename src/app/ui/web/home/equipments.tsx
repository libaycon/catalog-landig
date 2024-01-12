import Image from "next/image";
import dynamic from "next/dynamic";
import EquipmentCard from "@/components/cards/equipmentCard";
import { SwiperSlide } from "@/components/slider/swiper";
import { Button } from "@nextui-org/react";

const Swiper = dynamic(() => import("@/components/slider/swiper"), {
    ssr: false,
    loading: () => <div className="w-full text-center text-secondary font-semibold">Loading...</div>
})

const equipments = [
    {
        id: "1",
        name: "Konica Minolta Bizhub C360i Konica Minolta Bizhub C360i Konica Minolta Bizhub C360i",
        image: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697803476/static/multifuncionale_serie.50i-removebg-preview_ecbpal.png",
        features: [
            "Tipo: Multifuncional Color",
            "Tamaño de Papel: A3+",
            "Velocidad: 36 ppm",
            "Memoria: 8 GB",
            "Disco Duro: 256 GB",
        ]
    },
    {
        id: "1",
        name: "Konica Minolta Bizhub C360i",
        image: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697844355/static/ricoh-im-430f-removebg-preview_pltdmy.png",
        features: [
            "Tipo: Multifuncional Color",
            "Tamaño de Papel: A3+",
            "Velocidad: 36 ppm",
            "Memoria: 8 GB",
            "Disco Duro: 256 GB",
        ]
    },
    {
        id: "1",
        name: "Konica Minolta Bizhub C360i",
        image: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697844354/static/fotocopiadora-konica-minolta-bizhub-c450i-removebg-preview_coqwp7.png",
        features: [
            "Tipo: Multifuncional Color",
            "Tamaño de Papel: A3+",
            "Velocidad: 36 ppm",
            "Memoria: 8 GB",
            "Disco Duro: 256 GB",
        ]
    },
    {
        id: "1",
        name: "Konica Minolta Bizhub C360i",
        image: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697844354/static/canon-imagerunner-advance-dx-c5840i-removebg-preview_msxcmb.png",
        features: [
            "Tipo: Multifuncional Color",
            "Tamaño de Papel: A3+",
            "Velocidad: 36 ppm",
            "Memoria: 8 GB",
            "Disco Duro: 256 GB",
        ]
    },
    {
        id: "1",
        name: "Konica Minolta Bizhub C360i",
        image: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697803476/static/multifuncionale_serie.50i-removebg-preview_ecbpal.png",
        features: [
            "Tipo: Multifuncional Color",
            "Tamaño de Papel: A3+",
            "Velocidad: 36 ppm",
            "Memoria: 8 GB",
            "Disco Duro: 256 GB",
        ]
    },
    {
        id: "1",
        name: "Konica Minolta Bizhub C360i",
        image: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697803476/static/multifuncionale_serie.50i-removebg-preview_ecbpal.png",
        features: [
            "Tipo: Multifuncional Color",
            "Tamaño de Papel: A3+",
            "Velocidad: 36 ppm",
            "Memoria: 8 GB",
            "Disco Duro: 256 GB",
        ]
    },
]


const Equipments = (): JSX.Element => {
    return (
        <section className="w-full bg-[#011223] bg-[url('https://res.cloudinary.com/dppta0r5e/image/upload/v1697946475/static/Konica-Minolta-3-1920x1080-1_jpt5e7.png')] bg-cover bg-center bg-no-repeat px-4 tablet:px-8 overflow-hidden">
            <div className="container m-auto py-16">
                <div className="flex flex-col justify-center items-center pb-20">
                    <Image src='https://res.cloudinary.com/dppta0r5e/image/upload/v1697829981/static/3323088-removebg-preview_o4gw1m.png' width={100} height={100} alt="icon" />
                    <span className="text-4xl text-white">Equipos</span>
                </div>
                <div className="flex flex-col items-center gap-8 web-sm:flex-row web-sm:justify-end web-sm:gap-24">
                    <div className="flex flex-col gap-6 web-lg:w-[40%] py-6 px-10 rounded-3xl bg-[#000a1ed4]">
                        <h2 className="text-3xl web-md:text-5xl font-semibold text-primary">Contamos con los mejores equipos multifuncionales del mercado</h2>
                        <span className="text-md web-md:text-xl text-justify">La elección preferida para empresas en busca de calidad, eficiencia y confiabilidad en impresión y seguridad. Desde una calidad de impresión sobresaliente hasta soluciones de gestión avanzada y un compromiso con la sustentabilidad, explora los beneficios clave que nuestros equipos ofrece para llevar tu entorno de impresión al siguiente nivel.</span>
                        <Button radius="full" variant="solid" color="secondary" className="font-semibold px-10 text-md mt-6 w-max m-auto" >Ver equipos</Button>
                    </div>

                    <div className="swiper w-[270px] swiper-cards swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress">
                        <Swiper
                            effect="cards"
                            grabCursor={true}
                            speed={1000}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            class="mySwiper swiper-wrapper"
                        >
                            {equipments.map((equipment, index) => (
                                <SwiperSlide key={`${equipment.id}-${index}`} class="swiper-slide">
                                    <EquipmentCard equipment={equipment} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Equipments;