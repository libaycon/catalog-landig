'use client';

import { useState, useEffect } from "react";
import CustomInput from "../formElements/input"
import { useFormState } from "react-dom";
import { createBrand } from "@/app/lib/equipmentBrand";
import { createReplaceBrand } from "@/app/lib/replaceBrand";
import { createEquipmentCategory } from "@/app/lib/equipmentCategory";
import { createRentalCategory } from "@/app/lib/rentalCategory";
import { createReplaceCategory } from "@/app/lib/replaceCategory";


const action = (name: string) => {
    return name === "brand" ? createBrand :
    name === "replaceBrand"? createReplaceBrand:
    name === "equipmentCategory"? createEquipmentCategory:
    name === "replaceCategory"? createReplaceCategory: createRentalCategory
}

const title = (name: string) => {
    return name === "brand" ? "Marca de Equipos" :
    name === "replaceBrand"? "Marca de Repuestos":
    name === "equipmentCategory"? "Categoriá de Equipos":
    name === "replaceCategory"? "Catetoriá de Repuestos": "Categoriá de Rentas"
}

export default function AddModal({ ...rest }) {
    const [inputValue, setInputValue] = useState("");
    const initialState = {messge: null, errors: {}};
    const { id, onClick } = rest;
    const [formState, dispatch] = useFormState(action(id), initialState);
    
    const handleOnChage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const onAction = (payload: FormData) => {
        dispatch(payload);
        setInputValue("")
    }

    return (
        <div className="absolute inset-0 backdrop-blur-md flex justify-center items-center z-10 select-none">
            <div className="add-modal relative max-w-[280px] w-full p-8 bg-bg-primary border-1 border-solid border-[#ffffff3d] rounded-xl">
                    <h3 className="text-xl text-center">{title(id)}</h3>
                    {formState?.errors?.name && <p className="text-tiny font-semibold text-center leading-none text-danger bg-danger-100 p-2 rounded-md">{formState.errors.name[0]}</p>}
                    {formState?.message && <p
                        className="text-tiny font-semibold text-center leading-none text-success bg-success-50 p-2 rounded-md"
                    >{formState.message}</p>}
                    <form
                        action={onAction}
                        className="flex flex-col justify-between gap-4 mt-4">
                        <CustomInput
                            value={inputValue}
                            onChange={handleOnChage}
                            {...rest}
                        />
                        <button
                            type="submit"
                            className='px-6 h-8 rounded-full text-tiny text-primary-foreground leading-none bg-primary hover:scale-105 transition-all ease-in-out duration-300'
                        >Agregar</button>
                        <button
                            onClick={() => onClick(false)}
                            type="button"
                            className='px-6 h-8 rounded-full text-tiny text-white leading-none bg-danger hover:scale-105 transition-all ease-in-out duration-300'
                        >Cancelar</button>
                    </form>
            </div>
        </div>
    )
}