'use client';
import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import EyeFilledIcon from "@/app/ui/icons/eyeFilled";
import EyeSlashFilledIcon from "@/app/ui/icons/eyeSlashFilled";


const Login = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div className="h-full w-full">
            <div className="max-w-[300px] h-full m-auto my-auto mt-10 rounded-2xl px-6 py-20 border-1 border-solid border-[#a0a0a050]">
                <div className="flex flex-col gap-12">
                    <h1 className="text-4xl text-center">Iniciar Sesión</h1>
                    <form action="">
                        <div className="flex flex-col gap-8">
                            <div className="w-full">
                                <Input type="email" size="md" label="Email" radius="sm" spellCheck="false" autoCorrect="off"/>
                            </div>
                            <div className="w-full">
                                <Input
                                    size="md"
                                    label="Contraseña"
                                    radius="sm"
                                    spellCheck={false}
                                    autoComplete="off"
                                    endContent={
                                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                            {isVisible ? (
                                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                            ) : (
                                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                            )}
                                        </button>
                                    }
                                    type={isVisible ? "text" : "password"}
                                    className="max-w-xs"
                                />
                            </div>
                                <Button type="submit" color="secondary" radius="full" className="w-max px-8 m-auto">
                                    Iniciar Sesión
                                </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;