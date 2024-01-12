import { Button } from "@nextui-org/react";
import Image from "next/image";

const Card = ({ equipment }: { equipment: any }): JSX.Element => {
    return (
        <div className="flex flex-col items-center text-slate-600 gap-2 max-w-[315px] w-full border-1 border-solid border-[#99999954] px-4 rounded-xl bg-[#fbfbfbc0]">
            <div className="w-full py-4 px-4 border-b-1 border-solid border-[#99999954] text-center">
                <span className="text-md text-danger"><strong>10,0000</strong> imprenesiones B/N</span>
            </div>
            <div className="flex flex-row gap-2">
                <div className="flex flex-col justify-between gap-2 text-center">
                    <div className="w-[200px] h-[200px]">
                        <Image src={"https://res.cloudinary.com/dppta0r5e/image/upload/v1697844354/static/fotocopiadora-konica-minolta-bizhub-c450i-removebg-preview_coqwp7.png"} width={200} height={200} alt="Imagen del equipo" className="w-full h-full object-cover" priority />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-tiny font-bold">Konica Minolta</span>
                        <span className="text-2xl font-somibold">Bizhub C360i</span>
                    </div>
                </div>
                <div className="h-[260px] w-[1px] bg-[#99999954]" />

                <div className="flex flex-col gap-4 w-16 justify-center [&>div]:flex [&>div]:flex-col [&>div>span]:leading-none [&>div]:items-center [&>div>.title]:pt-1 [&>div>.title]:text-tiny [&>div>.title]:font-semibold [&>div>span]:text-tiny [&>div>span]:text-center">
                    <div>
                        <Image src={"https://res.cloudinary.com/dppta0r5e/image/upload/v1698360123/static/63742db18df3bb689a4089b4_botonvelocidad_qovltp.webp"} width={25} height={25} alt="icon" priority />
                        <span className="title">Velocidad:</span>
                        <span>47 ppm</span>
                    </div>
                    <div>
                        <Image src={"https://res.cloudinary.com/dppta0r5e/image/upload/v1698360128/static/63742e78aeb3b35285375f6c_botonmedida_eb375o.png"} width={25} height={25} alt="icon" priority />
                        <span className="title">Tamaño:</span>
                        <span>A4 y oficio</span>
                    </div>
                    <div>
                        <Image src={"https://res.cloudinary.com/dppta0r5e/image/upload/v1698360138/static/63d460629745bc76a0bcad61_01_Copymart_Master_web-34_vlqqdq.png"} width={25} height={25} alt="icon" priority />
                        <span className="title">Funciones:</span>
                        <span>Copia, Impresion, Escaneo</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1 pt-3 w-full text-center items-center border-t-1 border-solid border-[#99999954]">
                <span className="text-md text-danger font-[500]">Toner, Consumibles y reparaciones</span>
                <span className="text-sm max-w-fit">
                    Servicios mensuales y correctivos.
                    <br />
                    Tiempo de respuesta 3 hrs. máximo.
                </span>
            </div>
            <div className="flex justify-center gap-6 py-4">
                <Button
                    variant="solid"
                    radius="full"
                    size="sm"
                    className="px-8 w-max font-semibold bg-primary-foreground"
                >+ Info</Button>
                <Button
                    color="primary"
                    variant="solid"
                    radius="full"
                    size="sm"
                    className="px-8 w-max font-semibold"
                >Cotizar</Button>
            </div>
        </div>
    )
}

export default Card;