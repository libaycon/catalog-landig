import Image from "next/image";
import Main from "./main";
import BigBox from "@/app/ui/icons/bigBox";
import Card from "./card";
import equipments from "@/data/equipments";
import RentalDetails from "./cardDetails";
import styles from "./icon.module.css";
import ContactSection from "../ui/web/home/contactSection";


function RentalPage(): JSX.Element {
    const mylist = [1, 3, 4, 5]
    const rentalFeatures = [
        { icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1698373262/static/63d4762e965ab0dc453a31d4_01_Copymart_personaliza_bsjdty.webp", text: "Planes de renta 100% personalizables" },
        { icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1698373263/static/63d9af94420725320f29007b_CopyMart_Iconos_Web_Renta_02_pdx8te.webp", text: "Consumibles y refacciones ilimitados" },
        { icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1698373267/static/63d476663dc29b7ec38f0907_01_Copymart_servicio_preventivo_lrusrm.webp", text: "Servicio mensual programado" },
        { icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1698373271/static/63d47675c09c1b7dc79743cf_01_Copymart_tiempo_respuesta_pt9du7.webp", text: "Servicio correctivo en 3 horas máximo" }
    ]

    return (
        <div className="w-full [&>div]:px-4 [&>div>div]:container [&>div>div]:m-auto [&>div>div]:w-full">
            <Main />

            <div>
                <div className="flex flex-row items-end py-20 gap-8">
                    <div className="h-0 w-full border-b-[1px] border-solid border-secondary" />
                    <div><BigBox defColor="#ffc905" /></div>
                    <div className="h-0 w-full border-b-[1px] border-solid border-secondary" />
                </div>
            </div>

            <div>
                <div className="flex flex-col gap-12 pb-20">
                    <div className="flex flex-col items-center gap-3 text-center">
                        <span className="text-4xl text-primary font-semibold">Te ofrecemos un plan adecuado</span>
                        <span className="text-2xl">No pages mas de lo necesario con los planes que tenemos para tí</span>
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,200px))] justify-center">
                        {rentalFeatures.map((feature, index) => (
                            <div key={index} className="flex flex-col gap-2 items-center text-center">
                                <div>
                                    <Image src={feature.icon} width={35} height={35} alt="icon" priority />
                                </div>
                                <span>{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.colorBg}>
                <div className="py-20">
                    <div className="flex flex-col gap-3 text-center max-w-[600px] m-auto pb-16">
                        <span className="text-4xl text-primary font-semibold">Equipos a Color</span>
                        <span className="text-2xl">Soluciones integrales en impresión a color que ahorran tiempo y garantizan un funcionamiento eficiente</span>
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(315px,1fr))] gap-8 w-full justify-items-center">
                        {mylist.map((equipment, index) => (
                            <Card key={index} equipment={equipments} />
                        ))
                        }
                    </div>
                </div>
            </div>

            <div className={styles.bkBg}>
                <div className="py-20">
                    <div className="flex flex-col gap-3 text-center max-w-[600px] m-auto pb-16">
                        <span className="text-4xl text-primary font-semibold">Equipos a blanco y negro</span>
                        <span className="text-2xl">Soluciones integrales en impresión a color que ahorran tiempo y garantizan un funcionamiento eficiente</span>
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(315px,1fr))] gap-8 w-full justify-items-center">
                        {mylist.map((equipment, index) => (
                            <Card key={index} equipment={equipments} />
                        ))
                        }
                    </div>
                </div>
            </div>

            <RentalDetails />
            <ContactSection />
        </div>
    );
}

export default RentalPage;