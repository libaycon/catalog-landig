'use client';
import { useState } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import ToLeft from "../../app/ui/icons/toLeft";
import ToRight from "../../app/ui/icons/toRight";


const SlideThumbs = ({ slides }: { slides: string[] }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = (e: any) => {
        e.preventDefault();
        const direction = e.currentTarget.value;
        if (direction === "left") {
            setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
        } else {
            setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
        }
    }

    return (
        <div className="relative w-[500px] flex flex-col justify-center items-center gap-4">
            <div className="w-[500px] h-[500px] select-none" >
                <Image src={slides[currentSlide]} width={500} height={500} alt="slide" className="w-full h-full object-cover" priority />
            </div>
            <div className="pb-4 max-w-[50%] overflow-x-auto">
                <div className="flex flex-row gap-2">
                    {slides.length > 1 && slides.map((slide, index) => (
                        <Button
                            key={index}
                            size="sm"
                            variant="bordered"
                            className={`w-[60px] h-[60px] p-0 ${index === currentSlide ? 'border-secondary' : 'border-default-400'}`}
                        >
                            <Image
                                src={slide}
                                width={60}
                                height={60}
                                alt="slide"
                                className="w-auto h-full object-cover"
                                priority
                                onClick={() => setCurrentSlide(index)}
                            />
                        </Button>
                    ))}
                </div>
            </div>
            {slides.length > 1 && <>
                <Button
                    size="lg"
                    radius="full"
                    isIconOnly
                    variant="solid"
                    value="left"
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2"
                    onClick={handleNextSlide}
                    startContent={<ToLeft />}
                />
                <Button
                    size="lg"
                    radius="full"
                    isIconOnly
                    variant="solid"
                    value="right"
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2"
                    onClick={handleNextSlide}
                    startContent={<ToRight />}
                />
            </>
            }
        </div>
    )
};

export default SlideThumbs;