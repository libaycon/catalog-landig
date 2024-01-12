import { Button } from "@nextui-org/react"
import Image from "next/image"

const Main = () => {
    return (
        <div className="container m-auto">
            <div className="flex flex-col-reverse tablet:flex-row justify-between items-center gap-4 rounded-2xl bg-gradient-to-b from-[#1c3d5c] via-[#1c3d5c]/30 to-bg_primary p-10">
                <div className="flex flex-col gap-8 w-full tablet:w-3/5">
                    <div>
                        <span className="text-3xl mobile:text-4xl web-lg:text-5xl font-semibold">Nuestro</span>
                        <h1 className="text-5xl mobile:text-6xl web-lg:text-8xl text-primary font-bold">Soporte</h1>
                    </div>
                    <span className="text-md mobile:text-lg web-lg:text-xl">
                        Descubre las soluciones de capacitación y entrenamiento online que tenemos para tu empresa.
                    </span>
                    <Button
                        color="secondary"
                        variant="solid"
                        radius="full"
                        size="md"
                        className="px-8 w-max"
                    >
                        Contáctanos
                    </Button>
                </div>
                <div className="w-600 h-600">
                    <Image src="https://res.cloudinary.com/dppta0r5e/image/upload/v1701923803/static/suport_ypny9r.png" width={600} height={600} alt="main" className="w-auto" priority />
                </div>
            </div>
        </div>
    )
}

export default Main;