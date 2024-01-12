'use client';
import { Button, Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";

const listMore = [
    "Velocidad A4/A3: 22/14 ppm en blanco y negro",
    "Formatos de papel: A5-A3",
    "Económica impresora A3 multifuncional en blanco y negro",
    "Avanzada tecnología de impresión móvil",
    "Ideal para oficinas pequeñas"
]

const TabDetails = () => {
    return (
        <Tabs aria-label="Tab details">
            <Tab key="cescripcion" title="Descripción">
                <Card>
                    <CardBody>
                        Equipo multifuncional A3 en monocromo con 22 páginas por minuto con 2GB de memoria RAM y disco duro de 250GB. Es un equipo potente y con un precio básico. Incluye un controlador que permite la impresión en casi cualquier entorno de trabajo incluyendo Windows, Mac OS y Linux. Incluye dos bandejas de papel de 500 hojas cada una para tipos de papel de hasta 220 grs. incluyendo doble cara de hasta 209 grs. Su pantalla táctil tipo tablet de 7" le permite trabajar comodamente.
                    </CardBody>
                </Card>
            </Tab>
            <Tab key="more-details" title="Más detalles">
                <Card>
                    <CardBody className="gap-8">
                        <ul className="flex flex-col gap-3">
                            {listMore.map((items, index) => (
                                <li key={`${items}-${index}`} className="inline-flex items-center gap-3 text-md">
                                    <div>
                                    <Image src="https://res.cloudinary.com/dppta0r5e/image/upload/v1698203536/static/2107638_qzgsyz.png" width={14} height={14} alt="icon check" />
                                    </div>
                                    <span>{items}</span>
                                </li>
                            ))}
                        </ul>
                        <Button
                            size="md"
                            variant="solid"
                            className="rounded-md w-max">
                            Descargar Brochure
                        </Button>
                    </CardBody>
                </Card>
            </Tab>
        </Tabs>
    )
}

export default TabDetails;