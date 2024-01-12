import { Spacer } from '@nextui-org/react';
import Image from 'next/image';
import {useState} from 'react';

interface UploadFormProps {
    name: string;
    setIsOpen: (value: boolean) => void;
    label?: string;
}

export default function UploadForm({name, setIsOpen, label="Seleccionar un archivo csv"}:UploadFormProps):JSX.Element {
    const [file, setFile] = useState<File | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.files && setFile(e.target.files[0]);
    }
    
    return (
        <div className="absolute inset-0 backdrop-blur-md flex justify-center items-center z-10 select-none">
            <div className="showUpload relative max-w-[280px] w-full p-8 pb-12 bg-bg-primary border-1 border-solid border-[#ffffff3d] rounded-xl">
                <div className='pb-6 text-center'>
                    <span className='text-2xl'>Carga tu archivo</span>
                    <Spacer y={4} />
                    <div>
                        <input 
                            type="file" 
                            name={name} 
                            id={`id-${name}`} 
                            spellCheck={false} 
                            onChange={handleChange}
                            className='hidden'
                        />
                        <label htmlFor={`id-${name}`} className='cursor-pointer'>
                            <div className='h-24 border-1 border-dashed border-slate-500 rounded-lg flex flex-col justify-center items-center p-4'>
                                <div>
                                    <Image src="https://res.cloudinary.com/dppta0r5e/image/upload/v1699028448/static/8242984_cwu6zj.png" width={40} height={40} alt='svg icon'/>
                                </div>
                                <span className='text-sm'>{file?.name || label}</span>
                            </div>
                        </label>
                    </div>
                </div>
                <div className='absolute bottom-0 right-0 left-0 h-12 flex justify-between gap-4 px-8'>
                    <button
                        className='px-6 h-8 rounded-full text-tiny text-primary-foreground leading-none bg-primary hover:scale-105 transition-all ease-in-out duration-300'
                    >Subir</button>
                    <button
                        className='px-6 h-8 rounded-full text-tiny text-white leading-none bg-danger hover:scale-105 transition-all ease-in-out duration-300'
                        onClick={() => {
                            setIsOpen(false);
                            setFile(null);
                        }}
                    >Cancelar</button>
                </div>
            </div>
        </div>
    )
}