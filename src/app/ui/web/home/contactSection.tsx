import { serviceEnvirontments, contactInfos } from '@/static_data/home_page';
import ContactForm from './contactForm';


const ContactSection = () => {

    return (
        <section className="w-full px-4 tablet:px-8"> {/* bg-[#041e30] */}
            <div className="container m-auto py-20 flex flex-col items-center web-md:items-start web-md:flex-row justify-between gap-14 web-md:gap-8">
                <div className="flex flex-col gap-14 w-full">
                    <div className="relative flex flex-col gap-4 after:absolute after:right-0 after:left-0 after:top-[calc(100%+2rem)] mb-10 after:h-2 after:bg-primary after:rounded-md" >
                        <h3 className="text-4xl text-secondary font-semibold">Déjanos ayudarte</h3>
                        <span className="text-lg">Ponte en contacto</span>
                    </div>
                    {serviceEnvirontments.map((environtment, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <span className="text-xl text-secondary font-bold">{environtment.title}</span>
                            <ul className="grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-2 marker:text-secondary marker:text-xl marker:leanding-none list-[circle] list-inside [&>li]:font-semibold">
                                {environtment.list.map((item, index) => (
                                    <li key={index} className="text-sm web-lg:text-md leading-1">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="flex flex-col gap-4">
                        <span className="text-xl text-secondary font-bold">Contactenos</span>
                        <ul className="flex flex-col gap-4 text-md text-sm web-gl:text-md [&>li]:inline-flex [&>li]:font-semibold [&>li]:gap-4 [&>li]:items-center [&>li>svg]:text-secondary">
                            {contactInfos.map((info, index) => (                                
                                <li key={index}>
                                    <info.icon className='h-5 w-5' />
                                    <span>{info.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-8 p-10 max-w-[500px] w-full rounded-3xl border-1 border-solid border-default-300 bg-[#429bc0]">
                    <span className="text-md">Complete este formulario y envíenos en breve nos pondremos en contacto.</span>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContactSection;