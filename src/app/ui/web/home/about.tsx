import { Button, Spacer } from "@nextui-org/react";

const AboutSection = (): JSX.Element => {
    return (
        <section className="w-full px-4 tablet:px-8">
            <div className="container m-auto flex flex-col web-sm:flex-row web-sm:justify-between gap-8 web-md:gap-24 py-24">
                <div className="flex flex-col w-max web-sm:block">
                    <span className="text-2xl web-lg:text-3xl text-secondary">__Somos</span>
                    <div className="flex flex-col items-end">
                        <span className="text-2xl web-md:text-4xl web-lg:text-6xl text-primary font-semibold leading-none">Importación</span>
                        <span className="text-[4rem] web-md:text-[7rem] web-lg:text-[10rem] text-primary font-bold leading-none">Digital</span>
                    </div>
                </div>
                <div className="flex flex-col gap-10 to-[#67dd80] via-[#439dc0] from-[#386fdd] bg-gradient-to-br px-10 py-8 rounded-3xl">
                    <span className="text-md web-lg:text-xl text-justify">
                        ¡Bienvenidos! Somos su socio confiable para todas sus necesidades de fotocopiado e impresión. Nos especializamos en la venta y alquiler de fotocopiadoras de alta calidad, respaldadas por un excepcional servicio de soporte técnico.
                        <Spacer y={2} />
                        Nuestra gama de fotocopiadoras está diseñada para satisfacer una variedad de necesidades, desde pequeñas oficinas hasta grandes operaciones comerciales. Ofrecemos equipos de las marcas más confiables del mercado, garantizando así la durabilidad y la eficiencia.
                        <Spacer y={2} />
                        Además de la venta y alquiler de equipos, nos enorgullece ofrecer un soporte técnico inigualable. Nuestro equipo de técnicos expertos está siempre listo para ayudarle con cualquier problema o consulta que pueda tener.
                        <Spacer y={2} />
                        Nuestro objetivo es proporcionar soluciones integrales que ayuden a su negocio a funcionar sin problemas. Ya sea que necesite una nueva fotocopiadora, repuestos o asistencia técnica, estamos aquí para ayudar.
                    </span>
                    <Button radius="full" variant="solid" className="font-semibold px-10 text-md mt-8 w-max m-auto bg-bg-primary" >Saber más de nosotros</Button>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;