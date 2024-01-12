import Image from "next/image";
import { Button } from "@nextui-org/react";
import { slideFeatures } from "@/static_data/home_page";
import styles from "./custom.module.css";

const MainSection = (): JSX.Element => {

    return (
        <section className="relative w-full px-4 tablet:px-8 z-[1]">
            <div className="absolute inset-0 -top-20 opacity-60 -z-[1]">
                <Image src='https://res.cloudinary.com/dppta0r5e/image/upload/v1701780148/static/1425_dahdi9.jpg' alt="background" fill className="w-full h-full object-cover" priority />
            </div>
            <div className={`container ${styles.square_bg} m-auto flex flex-col gap-8 justify-center items-center w-full min-h-[calc(100vh-5rem)] pt-4 pb-14`}>
                <div className="flex smTablet:flex-row flex-col items-center">
                    <div className="w-[300px] h-[300px] mobile:w-[400px] mobile:h-[400px]">
                        <Image src={slideFeatures.image} alt="main" height={400} width={400} priority className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col gap-6 [&>span]:text-md [&>span]:font-[500] [&>span]:whitespace-nowrap [&>span]:text-ellipsis smTablet:pr-4">
                        {slideFeatures.features.map((feature, index) => (
                            <span key={index}
                                className={`relative pl-10 leading-none before:absolute before:left-0 before:-bottom-[1px] before:block before:w-[1.2rem] before:h-[1.2rem] before:rounded-full before:border-2 before:border-solid before:border-primary ${index === 0 ? '' : 'after:absolute after:left-[0.61rem] after:bottom-[102%] after:w-[1px] after:h-6 after:bg-primary'}`}
                            >
                                {feature}
                            </span>
                        ))}
                    </div>
                </div>
                <h1 className="font-semibold text-4xl md:text-5xl web-md:text-6xl md:font-bold web-md:w-8/12 text-center text-primary">Optimizando su Gestión de Impresión, Copiado y Digitalización de documentos</h1>
                <Button size="md" radius="full" variant="ghost" color="primary" className="px-8 text-md hover:font-semibold">
                    Solicitar Cotización
                </Button>
            </div>
        </section>
    );
};

export default MainSection;