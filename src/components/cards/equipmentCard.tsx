'use client';
import Image from "next/image";
import Button from "../button/normalizeButton";
import ShareIcon from "../../app/ui/icons/share";
import { useMemo } from "react";
import Link from "next/link";


interface Equipment {
    id: string;
    name: string;
    image: string;
    features: string[];
    functions?: [{ [key: string]: boolean }];
};

const EquipmentCard = ({ equipment, bgColor = "bg-[#2f3643]", borderColor = "border-[#618fcb6d]" }: { equipment: Equipment, bgColor?: string, borderColor?: string }) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log("shared button clicked")
    }

    const card = useMemo(() => {
        return (
            <Link href={`/equipos/${equipment.id}`}
                className={`relative flex flex-col items-center justify-between h-full max-w-[370px] pb-8 w-full border-1 border-solid ${borderColor} rounded-[18px] ${bgColor}`}>
                <div className="w-[250px] h-[250px]">
                    <Image src={equipment.image} alt={equipment.name} width={300} height={300} className="w-full h-full object-cover" priority />
                </div>
                <div className="flex flex-col h-auto justify-between gap-4 w-full px-8 py-4">
                    <div className="flex flex-col gap-2">
                        <span className="font-bold text-sm">{equipment.name}</span>
                        <ul className="text-sm text-slate-300 list-[circle] list-inside">
                            {equipment.features.map((feature, index) => (
                                <li key={index} className="">
                                    <span >{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Button size="md"
                    radius="full"
                    color="secondary"
                    variant="solid"
                    className="hover:font-semibold w-9/12"
                    onClick={handleClick}
                >
                    Consultar
                </Button>
                <Button isIconOnly size="sm" color="secondary" radius="full" variant="solid" className="absolute right-3 top-3 p-1" startContent={<ShareIcon />} />
            </Link>
        )
    }, [])

    return <>{card}</>
}

export default EquipmentCard;