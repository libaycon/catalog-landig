'use client';

import { useState } from "react";
import { RadioGroup, Radio, Input, Textarea, Button, Select, SelectItem, Checkbox } from "@nextui-org/react";
import { services } from "@/static_data/home_page";

const ContactForm = () => {
    const [isEterprise, setIsEnterprise] = useState<boolean>(true);

    return (
        <form action="">
            <div className="flex flex-col gap-7">
                <div className="">
                    <RadioGroup
                        label="¿Quien contacta?"
                        size="lg"
                        orientation="horizontal"
                        defaultValue="company"
                        isRequired
                        color="primary"
                        classNames={{ wrapper: "gap-8", label: "text-md text-white font-semibold" }}
                        onChange={(e) => setIsEnterprise(e.target.value === "company")}
                    >
                        <Radio value="company" /* classNames={{wrapper: "border-default-400"}} */>Empresa</Radio>
                        <Radio value="person" /* classNames={{wrapper: "border-default-400"}} */>Persona Natural</Radio>
                    </RadioGroup>
                </div>
                <div className="flex flex-col gap-2">
                    <Input type="text" name="name" label="Nombre" isRequired radius="sm" spellCheck={false} autoComplete="off"
                        classNames={{ inputWrapper: "bg-[#000a1ea6] data-[hover=true]:bg-[#000a1e63] group-data-[focus=true]:bg-[#000a1ea6]" }}
                    />
                </div>

                {isEterprise && (
                    <div className="flex flex-col gap-2">
                        <Input type="text" name="company-name" label="Empresa" isRequired radius="sm" spellCheck={false} autoComplete="off"
                            classNames={{ inputWrapper: "bg-[#000a1ea6] data-[hover=true]:bg-[#000a1e63] group-data-[focus=true]:bg-[#000a1ea6]" }}
                        />
                    </div>
                )}

                <div className="flex flex-col gap-2">
                    <Input type="email" name="email" label="Correo Electrónico" isRequired radius="sm" spellCheck={false} autoComplete="off" classNames={{ inputWrapper: "bg-[#000a1ea6] data-[hover=true]:bg-[#000a1e63] group-data-[focus=true]:bg-[#000a1ea6]" }} />
                </div>
                <div className="flex flex-row gap-4">
                    {isEterprise ? (
                        <Input type="text" name="ruc" label="RUC" isRequired radius="sm" spellCheck={false} autoComplete="off" classNames={{ inputWrapper: "bg-[#000a1ea6] data-[hover=true]:bg-[#000a1e63] group-data-[focus=true]:bg-[#000a1ea6]" }} />
                    ) : (
                        <Input type="text" name="indentity" label="RUC/DNI" isRequired radius="sm" spellCheck={false} autoComplete="off" classNames={{ inputWrapper: "bg-[#000a1ea6] data-[hover=true]:bg-[#000a1e63] group-data-[focus=true]:bg-[#000a1ea6]" }} />
                    )}

                    <Input type="text" name="phone-number" label="Celular* (9 dígitos)" isRequired radius="sm" spellCheck={false} autoComplete="off" classNames={{ inputWrapper: "bg-[#000a1ea6] data-[hover=true]:bg-[#000a1e63] group-data-[focus=true]:bg-[#000a1ea6]" }} />
                </div>
                <div>
                    <Select
                        name="service-type"
                        items={services}
                        label="Tipo de Servicio a Consultar"
                        isRequired
                        radius="sm"
                        spellCheck={false}
                        classNames={{ trigger: "bg-[#000a1ea6] data-[hover=true]:bg-[#000a1e63] group-data-[focus=true]:bg-[#000a1ea6]" }}
                    >
                        {(item) => (<SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}
                    </Select>
                </div>
                <div className="flex flex-col gap-2">
                    <Textarea
                        name="message"
                        label="Mensaje"
                        isRequired
                        placeholder="Ingrese su mensaje"
                        radius="sm"
                        spellCheck="false"
                        classNames={{ inputWrapper: "bg-[#000a1ea6] data-[hover=true]:bg-[#000a1e63] group-data-[focus=true]:bg-[#000a1ea6]" }}
                    />
                </div>
                <div>
                    <Checkbox
                        color="primary"
                        classNames={{ label: "text-tiny text-white" }}
                    >Acepto las politicas</Checkbox>
                </div>
                <Button
                    radius="full"
                    type="submit"
                    value="off"
                    variant="solid"
                    className="bg-bg-primary"
                >
                    Enviar
                </Button>
            </div>
        </form>
    )
}

export default ContactForm;