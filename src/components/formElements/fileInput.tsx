import { Tooltip } from "@nextui-org/react";
import { CameraIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface FileInputProps {
    name: string;
    label: string;
    placeholder: string;
    description?: string;
    file: File | null;
    setFile: (file: File | null) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface MultiFileInputProps {
    name: string;
    label: string;
    placeholder: string;
    description?: string;
    files: File[] | null;
    setFiles: (file: File[]) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FileInput({ setFile, ...rest }: FileInputProps): JSX.Element {

    const { name, label, placeholder, file, description } = rest;

    const fileURL = file && URL.createObjectURL(file);

    return (
        <div>
            <div className="relative border-2 border-solid border-default-200 rounded-md p-2 pt-6 select-none">
                <span className="absolute top-1 left-3 text-tiny font-semibold text-foreground-500">{label}</span>
                <input
                    type="file"
                    id={`id-${name}`}
                    spellCheck={false}
                    hidden
                    className='hidden'
                    {...rest}
                />
                <label htmlFor={`id-${name}`} className='cursor-pointer'>
                    <div className='h-max border-2 border-dashed border-slate-500 rounded-lg flex flex-col justify-center items-center p-4'>
                        {!file?.name ? <>
                            <CameraIcon className='h-8 w-8 text-slate-500' />
                            <span className='text-tiny'>{placeholder}</span>
                        </> :
                            <>
                                <div className="w-16 h-16 rounded-md border-1 border-solid border-default-300 overflow-hidden">
                                    <img
                                        src={fileURL || ""}
                                        alt={file?.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-row items-center gap-1">
                                    <span className='text-tiny text-foreground-500 leading-1 p-1'>{file?.name}</span>
                                    <button className="p-[3px] h-max w-max rounded-full bg-danger-400"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setFile(null);
                                        }}
                                    >
                                        <XMarkIcon className='h-3 w-3 text-white' />
                                    </button>
                                </div>
                            </>
                        }
                    </div>
                </label>
            </div>
            <div className="text-tiny text-foreground-500 leading-1 p-1">{description}</div>
        </div>
    )
}


export function MultiFileInput({ setFiles, ...rest }: MultiFileInputProps): JSX.Element {
    const { name, label, placeholder, files, description } = rest;

    const handleRemove = (index: number) => {
        setFiles(files?.filter((_, i) => i !== index) || []);
    }

    return (
        <div>
            <div className="relative border-2 border-solid border-default-200 rounded-md p-2 pt-6 select-none">
                <span className="absolute top-1 left-3 text-tiny font-semibold text-foreground-500">{label}</span>
                <input
                    type="file"
                    id={`id-${name}`}
                    spellCheck={false}
                    className='hidden'
                    draggable
                    multiple
                    {...rest}
                    hidden
                />
                <label htmlFor={`id-${name}`} className='cursor-pointer'>
                    <div className='h-max border-2 border-dashed border-slate-500 rounded-lg flex flex-wrap justify-center items-center gap-2 p-4'>
                        {!files?.length ? <>
                            <div className="flex flex-col items-center">
                            <CameraIcon className='h-8 w-8 text-slate-500' />
                            <span className='text-tiny'>{placeholder}</span>
                            </div>
                        </> :
                            (files.map((file, index) => {
                                const fileURL = URL.createObjectURL(file);

                                return (
                                    <Tooltip
                                        key={index}
                                        content={file.name}
                                    >
                                        <div className="relative w-16 h-16 rounded-md overflow-hidden border-1 border-solid border-default-300"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <img
                                                src={fileURL}
                                                alt={file.name}
                                                className="w-full h-full object-cover"
                                            />
                                            <button className="absolute top-1 right-1 p-[3px] h-max w-max rounded-full bg-danger-400"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleRemove(index);
                                                }}
                                            >
                                                <XMarkIcon className='h-3 w-3 text-white' />
                                            </button>
                                        </div>
                                    </Tooltip>
                                )
                            })
                            )}
                    </div>
                </label>
            </div>
            <div className="text-tiny text-foreground-500 leading-1 p-1">{description}</div>
        </div>
    )
}