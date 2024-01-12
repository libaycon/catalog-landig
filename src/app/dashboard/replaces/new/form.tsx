'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CustomInput from "@/components/formElements/input";
import CustomSelect from "@/components/formElements/select";
import CustomTextTarea from "@/components/formElements/text-tarea";
import FileInput, { MultiFileInput } from "@/components/formElements/fileInput";
import brands from "@/data/brandEquipments";
import { createReplace } from "@/app/lib/actions";
import { useFormState } from "react-dom";


export default function Form() {
    const [file, setFile] = useState<File | null>(null);
    const [gallery, setGallery] = useState<File[]>([]);
    const initialState = {messge: null, errors: {}}
    const [formState, dispatch] = useFormState(createReplace, initialState)

    const router = useRouter();

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.files && setFile(e.target.files[0]);
    }

    const handleGallery = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files && Array.from(e.target.files);
        files && setGallery([...gallery, ...files]);
    }

    const onAction = (payload: FormData) => {
        payload.append('image', file as Blob);
        gallery.forEach((file, index) => {
            payload.append(`gallery[${index}]`, file as Blob);
        });
        dispatch(payload)
    }
    
    return (
        <div className='p-6'>
            <div>
                <span className='text-2xl font-semibold'>Agregar un Nuevo Repuesto</span>
                <form action={onAction} //onSubmit={handleSubmit}
                    className='flex flex-col gap-8 py-4 max-w-[780px] w-full'
                >
                    <div>
                        <CustomInput
                            isRequired
                            type="text"
                            name="name"
                            label="Nombre del Repuesto"
                            description="Nombre del Repuesto"
                        />
                    </div>
                    <div>
                        <CustomInput
                            type="text"
                            name="shortCode"
                            label="Codigo del Repuesto"
                            description="Codigo del repeusto. ejemplo: DK512 (opcional)"
                        />
                    </div>
                    <div className="flex flex-row gap-4">
                        <CustomSelect
                            isRequired
                            label="Para la marca"
                            name="toBrandId"
                            description="Selecciona una marca de la lista o ve a la sección de marcas para agregar una nueva."
                            items={brands}
                        />
                        <CustomInput
                            type="text"
                            name="partNumber"
                            label="Código de partes"
                            description="Código de partes del Repuesto. ejemplo: AX445G8-07 (opcional)"
                        />
                    </div>
                    <div className="grid grid-rows-2 mobile:grid-rows-1 mobile:grid-cols-2 gap-4">
                        <CustomInput
                            isRequired
                            type="text"
                            name="compatibility"
                            label="Compatabilidad"
                            description="Modelos compatibles (puedes agregar Varios)"
                        />
                        <CustomInput
                            type="text"
                            name="brandId"
                            label="Marca del Repuesto"
                            description="Marca del Repuesto"
                        />
                    </div>
                    <div className="grid grid-rows-2 mobile:grid-rows-1 mobile:grid-cols-2 gap-4">
                        <FileInput
                            name="image"
                            label="Imagen del Repuesto"
                            placeholder="Selecciona una imagen"
                            description="Imagen del Repuesto (opcional), se recomienda que sea de 500x500px, admite formato png. Y se recomienda que sea con fondo transparente"
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
                        <CustomTextTarea
                            isRequired
                            name="description"
                            label="Descripción"
                            description="Características o detalles del Repuesto"
                        />
                    </div>
                    <div className="flex justify-around pt-10 [&>button]:text-sm [&>button]:h-8 [&>button]:py-1 [&>button]:px-6 [&>button]:rounded-full [&>button]:transition-all">
                        <button type="submit" className="text-primary-foreground bg-primary hover:scale-105">Crear repuesto</button>
                        <button type="button" className="bg-danger-500 text-white hover:scale-105"
                            onClick={() => router.back()}
                        >Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}