'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Radio, RadioGroup } from "@nextui-org/react";
import CustomInput from "@/components/formElements/input";
import CustomSelect from "@/components/formElements/select";
import CustomTextTarea from "@/components/formElements/text-tarea";
import FileInput from "@/components/formElements/fileInput";
import brands from "@/data/brandEquipments";


export default function NewRental(): JSX.Element {
    const [file, setFile] = useState<File | null>(null);

    const router = useRouter();

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.files && setFile(e.target.files[0]);
    }

    return (
        <div className="p-6">
            <div>
                <span className="text-2xl font-semibold">Agregar un Nuevo Plan</span>
                <form action=""
                    className='flex flex-col gap-8 py-4 max-w-[780px] w-full'
                >
                    <div className="flex flex-row gap-4">
                        <CustomSelect
                            isRequired
                            label="Marca"
                            name="brand"
                            description="Selecciona una marca de la lista o ve a la sección de marcas para agregar una nueva."
                            items={brands}
                        />
                        <CustomInput
                            isRequired
                            type="text"
                            name="modelo"
                            label="Modelo"
                            description="Modelo de quipo que mejor se adapta al plan"
                        />
                    </div>
                    <div>
                        <RadioGroup
                            label="Tipo de impresión"
                            size="lg"
                            orientation="horizontal"
                            defaultValue="color"
                            isRequired
                            color="secondary"
                            classNames={{ wrapper: "gap-8", label: "text-md text-white font-semibold" }}
                        >
                            <Radio value="color" /* classNames={{wrapper: "border-default-400"}} */>Color</Radio>
                            <Radio value="bk" /* classNames={{wrapper: "border-default-400"}} */>B/K</Radio>
                        </RadioGroup>
                    </div>
                    <div className="flex flex-row gap-4">
                        <CustomInput
                            type="number"
                            name="quantity-of-print"
                            label="Limite de Impresiones"
                            description="Cantidad de impresiones que se pueden realizar en el mes"
                        />
                        <CustomSelect
                            isRequired
                            label="Tipo de plan"
                            name="type-of-plan"
                            description="Selecciona el tipo de plan"
                            items={[
                                { label: 'Mensual', value: 'monthly' },
                                { label: 'Anual', value: 'annual' },
                            ]}
                        />
                    </div>
                    <div>
                        <FileInput
                            name="image"
                            label="Imagen del equipo"
                            placeholder="Selecciona una imagen"
                            description="Imagen del equipo (opcional), se recomienda que sea de 500x500px, admite formato png. Y se recomienda que sea con fondo transparente"
                            onChange={handleFile}
                            file={file}
                            setFile={setFile}
                        />
                    </div>
                    <div>
                        <CustomTextTarea
                            name="details"
                            label="Detalles del plan"
                            description="Detalles del plan"
                        />
                    </div>
                    <div className="flex justify-around pt-10 [&>button]:text-sm [&>button]:h-8 [&>button]:py-1 [&>button]:px-6 [&>button]:rounded-full [&>button]:transition-all">
                        <button type="submit" className="text-primary-foreground bg-primary hover:scale-105">Crear Plan</button>
                        <button type="button" className="bg-danger-500 text-white hover:scale-105"
                            onClick={() => router.back()}
                        >Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}