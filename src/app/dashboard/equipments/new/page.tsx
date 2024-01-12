'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomInput from "@/components/formElements/input";
import CustomSelect from "@/components/formElements/select";
import CustomTextTarea from "@/components/formElements/text-tarea";
import FileInput, {MultiFileInput} from "@/components/formElements/fileInput";
import brands from "@/data/brandEquipments";


export default function NewEquipment(): JSX.Element {
    const [file, setFile] = useState<File | null>(null);
    const [gallery, setGallery] = useState<File[]>([]);

    const router = useRouter();

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.files && setFile(e.target.files[0]);
    }

    const handleGallery = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files && Array.from(e.target.files);
        files && setGallery([...gallery, ...files]);
    }

    return (
        <div className='p-6'>
            <div>
                <span className='text-2xl font-semibold'>Agregar un Nuevo Equipo</span>
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
                            type="text"
                            name="code"
                            label="Código"
                            description="Código del equipo (opcional)"
                        />
                    </div>
                    <div>
                        <CustomInput
                            isRequired
                            type="text"
                            name="modelo"
                            label="Modelo"
                            description="Nombre del equipo"
                        />
                    </div>
                    <div className="grid grid-rows-2 mobile:grid-cols-2 gap-4">
                        <FileInput
                            name="image"
                            label="Imagen del equipo"
                            placeholder="Selecciona una imagen"
                            description="Imagen del equipo (opcional), se recomienda que sea de 500x500px, admite formato png. Y se recomienda que sea con fondo transparente"
                            onChange={handleFile}
                            file={file}
                            setFile={setFile}
                        />
                        <MultiFileInput
                            name="gallery"
                            label="Galería de imagenes"
                            placeholder="Selecciona una imagen"
                            description="Galería de imagenes del equipo (opcional), se recomienda que sean de 500x500px, admite formato png. Y se recomienda que sean con fondo transparente"
                            onChange={handleGallery}
                            files={gallery}
                            setFiles={setGallery}
                        />
                    </div>
                    <div>
                        <CustomInput
                            isRequired
                            type="text"
                            name="features"
                            label="Características basicas"
                            required
                            description="Características básicas del equipo separadas por coma (característica 1, característica 2, ...)"
                        />
                    </div>
                    <div>
                        <CustomTextTarea
                            name="description"
                            label="Descripción"
                            description="Descripción del equipo"
                        />
                    </div>
                    <div>
                        <CustomTextTarea
                            name="extra-features"
                            label="Características adicionales"
                            description="Características adicionales del equipo separadas por coma (característica 1, característica 2, ...)"
                        />
                    </div>
                    <div className="flex justify-around pt-10 [&>button]:text-sm [&>button]:h-8 [&>button]:py-1 [&>button]:px-6 [&>button]:rounded-full [&>button]:transition-all">
                        <button type="submit" className="text-primary-foreground bg-primary hover:scale-105">Crear equipo</button>
                        <button type="button" className="bg-danger-500 text-white hover:scale-105"
                            onClick={() => router.back()}
                        >Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}