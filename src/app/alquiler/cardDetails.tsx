import Image from "next/image";
import styles from "./icon.module.css";

const RentalDetails = () => {
    const details = [
        { icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1698418279/static/img.icons8_pgvd0q.png", text: "Personaliza tu plan o equipo según tus necesidades" },
        { icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1698418922/static/img.icons8_ckwpn1.png", text: "Los mejor tiempo de respuesta en consumibles y reparaciones" },
        { icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1698418640/static/img.icons8_xzdw6a.png", text: "Recibe atención al instante y con nuestros asesores" },
        { icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1698418324/static/img.icons8_zlxihj.png", text: "Cotiza en minutos y elige el equipo más rentable para tu oficina" },
        { icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1698418362/static/img.icons8_zkdk3o.png", text: "Recibe servicio técnico certificado en nuestra área de cobertura" },
        { icon: "https://res.cloudinary.com/dppta0r5e/image/upload/v1698418195/static/img.icons8_si05a8.png", text: "Contrata y deduce costos por el mejor servicio de impresión" }
    ]

    return (
        <div className="w-full">
            <div className="container m-auto flex flex-col items-center gap-12 text-center py-10" >
                <span className="text-4xl text-primary font-semibold">Elige Inportación Digital</span>
                <div className="">
                    {/* <div>
                        <Image src={"https://res.cloudinary.com/dppta0r5e/image/upload/v1698379935/static/tendencias-salud-2023_zz5dji.jpg"} width={500} height={500} alt="Iamge" className="w-full h-full object-cover" priority />
                    </div> */}
                    <div className="flex flex-wrap justify-center">
                        {details.map((detail, index) => (
                            <div key={index} className="flex flex-col items-center gap-2 max-w-[260px] p-5" >
                                <div className="w-[60px] h-[60px]">
                                    <Image src={detail.icon} width={60} height={60} alt="icon" priority className={`w-auto h-auto ${styles.iconPrimary}`} />
                                </div>
                                <div>
                                <span className="leading-none text-md">
                                    {detail.text}
                                </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RentalDetails;