import SlideThumbs from "@/components/slider/slidetThumbs";
import { Button } from "@nextui-org/react";
import TabDetails from "./tab";
import Plus from "@/app/ui/icons/plus";
import Minus from "@/app/ui/icons/minus";


function ItemDetail({ id }: { id: string }): JSX.Element {
    const slides = [
        "https://res.cloudinary.com/dppta0r5e/image/upload/v1698086311/static/replaces/51mMeS1RHDL-removebg-preview_ioqtzk.png",
    ];

    const features = {
        id: "1",
        name: "Konica Minolta Bizhub C360i",
        image: "https://res.cloudinary.com/dppta0r5e/image/upload/v1697844354/static/fotocopiadora-konica-minolta-bizhub-c450i-removebg-preview_coqwp7.png",
        features: [
            "Tipo: Multifuncional Color",
            "Tamaño de Papel: A3+",
            "Velocidad: 36 ppm",
            "Memoria: 8 GB",
            "Disco Duro: 256 GB",
        ],
    }


    return (
        <div className="w-full h-full">
            <div className="container m-auto flex flex-col gap-4">
                <div className="flex flex-row gap-20 justify-center py-20">
                    <div>
                        <SlideThumbs slides={slides} />
                    </div>

                    <div className="flex flex-col justify-between border-1 border-solid border-default-200 rounded-3xl max-w-[350px] w-full p-8 ">
                        <div className="flex flex-col gap-8">
                            <span className="text-2xl font-semibold">
                                Konica minolta Bizhub C360i
                            </span>
                            <ul className="flex flex-col gap-4 font-[500] pl-7">
                                {features.features.map((feature, index) => (
                                    <li key={`${feature}-${index}`}
                                        className="relative text-sm leading-none after:absolute after:h-4 after:rounded-full after:block after:w-4 after:-left-7 after:-bottom-[1px] after:bg-secondary after:z-10">
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-row gap-3 items-center justify-start">
                            <span className="text-md font-semibold">
                                Cantidad:
                            </span>
                            <div className="flex flex-row gap-2 rounded-full w-max">
                                <Button 
                                    isIconOnly
                                    variant="solid"
                                    radius="sm"
                                    size="sm"
                                    className="leading-none text-white p-2"
                                    startContent={<Minus />}
                                />
                                <input 
                                    type="text" 
                                    spellCheck="false" 
                                    defaultValue={0} 
                                    autoComplete="off"
                                    className="bg-transparent w-10 text-center"
                                />
                                <Button 
                                    isIconOnly
                                    variant="solid"
                                    radius="sm"
                                    size="sm"
                                    className="leading-none text-white p-2"
                                    startContent={<Plus />}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 mt-4">
                            <Button className="bg-default-300 text-white w-full py-2 rounded-md">
                                Cotizar
                            </Button>
                            <Button className="bg-secondary text-white w-full py-2 rounded-md">
                                Solicitar Demo
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="pb-8">
                    <div className="flex flex-col w-full">
                        <TabDetails />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;