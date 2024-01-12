import Image from "next/image";
import Main from "./main";
import BigAple from "@/app/ui/icons/appleBig";
import ContactSection from "../ui/web/home/contactSection";


function SupportPage() {
	return (
		<div className="w-full [&>div]:px-4 [&>div>div]:container [&>div>div]:m-auto [&>div>div]:w-full">
			<Main />
			<div>
				<div className="container m-auto flex flex-row items-end py-20 gap-8">
					<div className="h-0 w-full border-b-[1px] border-solid border-secondary" />
					<div><BigAple defColor="#ffc905" /></div>
					<div className="h-0 w-full border-b-[1px] border-solid border-secondary" />
				</div>
			</div>

			<div className="container m-auto">
				<div className="flex flex-col items-center gap-12 pb-20">
					<div className="flex flex-col web-opt:flex-row justify-between gap-16 web-opt:gap-8">
						<div className="web-opt:max-w-[50%] w-full">
							<Image src="https://res.cloudinary.com/dppta0r5e/image/upload/v1701920838/static/technical_ttf13w.png" width={600} height={600} alt="" className="" priority />
						</div>
						<div className="flex flex-col gap-4 web-opt:max-w-[45%] w-full">
							<h2 className="text-primary font-bold text-4xl">
								Infraestructura y Soporte Técnico
							</h2>
							<span className="mobile:text-xl text-justify text-slate-300 pb-8">
								Deje atrás los problemas de gestión de documentos en su empresa. Con nuestros servicios de <strong>Gestión y Soporte de Documentos</strong>, minimizará las interrupciones de productividad causadas por problemas en sus sistemas de documentación. Nuestro equipo de profesionales se dedica a proporcionar <strong>soluciones integrales</strong> que mantienen en funcionamiento todos sus procesos de documentación. Nos enfocamos en actividades que garantizan la gestión eficiente y constante de sus documentos.
							</span>
							<h2 className="text-primary font-bold text-4xl">
								Plan mensual de Soporte Técnico
							</h2>
							<span className="mobile:text-xl text-justify text-slate-300">
								Independientemente del tamaño de su empresa, diseñamos planes de soporte personalizados para sus necesidades y presupuesto, ofreciendo una amplia gama de servicios de tercerización (Outsourcing) en <strong>Gestión y Soporte de Documentos</strong>.

								Cada mes, recibirá un informe gerencial con un resumen de las actividades realizadas, así como información sobre su inventario de documentos, riesgos de licenciamiento, tipos de incidentes, entre otros. Este enfoque garantiza una gestión eficiente y constante de sus documentos.
							</span>
						</div>
					</div>
				</div>
			</div>
			<ContactSection />
		</div>
	);
}

export default SupportPage; 