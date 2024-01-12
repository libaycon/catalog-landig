import { FC } from "react";
import Image from "next/image";
import { Replace } from "@/types/replaces"
import { Button } from "@nextui-org/react";
import ShareIcon from "../../app/ui/icons/share";
import Link from "next/link";

const ReplacesCard: FC<{ replace: Replace }> = ({ replace }): JSX.Element => {
    return (
        <Link href={`/repuestos/${replace.id}`} className="relative flex flex-col items-center justify-between gap-6 h-full max-w-[320px] pb-8 w-full border-1 border-solid border-slate-400 bg-[#2f3643] rounded-[18px]">
            <div className="flex flex-col h-full justify-start items-center gap-4">
                <div className="w-[250px] h-[250px]">
                    <Image
                        src={replace.image}
                        alt={`imagen de ${replace.code}`}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>
                <div className="flex flex-col gap-2 px-6">
                    <span className="font-bold text-sm">{replace.name}</span>
                    <span className="text-sm">Código: {replace.code}</span>
                </div>
                <Button isIconOnly size="sm" color="secondary" radius="full" variant="solid" className="absolute right-3 top-3 p-1" startContent={<ShareIcon />} />
            </div>

            <Button size="md" radius="full" color="secondary" variant="solid" className="hover:font-semibold w-9/12">
                Consultar
            </Button>
        </Link>
    )
};

export default ReplacesCard;