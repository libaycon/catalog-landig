import SlideThumbs from "@/components/slider/slidetThumbs";
import { Button } from "@nextui-org/react";
import dynamic from "next/dynamic";
import Plus from "@/app/ui/icons/plus";
import Minus from "@/app/ui/icons/minus";
import { SwiperSlide } from "@/components/slider/swiper";
import replaces from "@/data/replaces";
import ReplacesCard from "@/components/cards/replacesCard";

const Swiper = dynamic(() => import('@/components/slider/swiper'),{
    ssr: false,
    loading: () => <div className="w-full text-center text-secondary font-semibold">Loading...</div>
})



const ItemDetail = () => {
    const slides = [
        "https://res.cloudinary.com/dppta0r5e/image/upload/v1698086311/static/replaces/51mMeS1RHDL-removebg-preview_ioqtzk.png",
    ];

    const replace = {
        id: "1",
        name: "Revelador Cian Konica Minolta Bizhub C224/C554e",
        image: "https://res.cloudinary.com/dppta0r5e/image/upload/v1698086307/static/replaces/Produto23173.grande.09ce90e3e16dfa57f9a65f4a5536f831-removebg-preview_scueia.png",
        features: [
            "Tipo: Revelador",
            "Color: Cian",
            "Marca: Konica Minolta",
            "Modelo: Bizhub C224/C554e",
        ],
    }


    return (
        <div className="w-full h-full">
            <div className="container m-auto flex flex-col gap-4">
                <div className="flex flex-row gap-20 justify-center py-20">
                    <div >
                        <SlideThumbs slides={slides} />
                    </div>

                    <div className="flex flex-col justify-between border-1 border-solid border-default-200 rounded-3xl max-w-[350px] w-full p-8 ">
                        <div className="flex flex-col gap-8">
                            <span className="text-2xl font-semibold">
                                Konica minolta Bizhub C360i
                            </span>
                            <ul className="flex flex-col gap-4 font-[500] pl-7">
                                {replace.features.map((feature, index) => (
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
                <div className="w-full pb-8">
                    <span className="text-2xl font-semibold">
                        Rpuestos Relacionados
                    </span>
                    <div className="py-12">
                        <Swiper 
                            slidesPerView={4}
                            spaceBetween={20}
                            freeMode={true}
                            speed={1000}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 0,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                1280: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                }}}
                            className="grid grid-cols-auto-fit2-1fr max-w-max"
                        >
                            {replaces.map((replace, index) => (
                                <SwiperSlide key={`${replace.id}-${index}`} class="free-slides" >
                                    <ReplacesCard replace={replace} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;