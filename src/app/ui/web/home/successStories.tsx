import Image from "next/image";
import { successCases } from "@/static_data/home_page";
import styles from './custom.module.css';

const SuccessStories = (): JSX.Element => {
    return (
        <div className="relative w-full bg-black before:absolute before:block before:w-full before:h-16 before:left-0 before:right-0 before:-top-14 before:bg-linerDk px-4 tablet:px-8 z-[1]">
            <div className="container m-auto flex flex-col web-md:flex-row gap-8 web-md:gap-0 py-16">
                <div className="flex web-md:flex-col items-center gap-4 whitespace-nowrap">
                    <span className="text-secondary text-2xl">Casos de Éxito</span>
                    <span className="text-md">Nuestros clientes</span>
                </div>
                <div className="flex gap-8 overflow-hidden w-full">
                    <div className={`${styles.infSlider} flex gap-8`}>
                        {successCases.map((item, index) => (
                            <div key={index} className="flex flex-col justify-center items-center gap-4 px-8 py-2  opacity-50">
                                <span className="text-tiny text-slate-300 font-semibold whitespace-nowrap">{item.name}</span>
                                <div className="h-20 w-max">
                                    <Image src={item.image} alt="success case" width={300} height={300} priority className="w-full h-full rounded-md" />
                                </div>
                            </div>
                        ))}
                        {successCases.map((item, index) => (
                            <div key={`copy-${index}`} className="flex flex-col justify-center items-center gap-4 px-8 py-2  opacity-50">
                                <span className="text-tiny text-slate-300 font-semibold whitespace-nowrap">{item.name}</span>
                                <div className="h-20 w-max">
                                    <Image src={item.image} alt="success case" width={300} height={300} priority className="w-full h-full rounded-md" />
                                </div>
                            </div>
                        ))}
                        {successCases.map((item, index) => (
                            <div key={`copy-${index}`} className="flex flex-col justify-center items-center gap-4 px-8 py-2  opacity-50">
                                <span className="text-tiny text-slate-300 font-semibold whitespace-nowrap">{item.name}</span>
                                <div className="h-20 w-max">
                                    <Image src={item.image} alt="success case" width={300} height={300} priority className="w-full h-full rounded-md" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessStories;