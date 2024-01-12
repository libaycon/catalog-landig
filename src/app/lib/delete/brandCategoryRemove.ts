'use server';

import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const formSchema = z.object({
    id: z.number()
});

export type State = {
    errors?: {
        id?: string[];
    };
    message?: string | null
}

async function deleteEntity(entity: any, formData: FormData): Promise<State> {
    const id = Number(formData.get('id'));
    try {
        await entity.deleteMany({ where: { id } });
        return { message: "Elemento eliminado" };
    } catch (error) {
        console.log(error);
        return { message: "No se pudo eliminar el elemento" };
    }
}

export async function brandDelete(prevState: State, formData: FormData) : Promise<State> {
    return await deleteEntity(prisma.brand, formData);
}

export async function replaceBrandDelete(prevState: State, formData: FormData) : Promise<State> {
    return await deleteEntity(prisma.replaceBrand, formData);
}

export async function equipmentCategoryDelete(prevState: State, formData: FormData) : Promise<State> {
    return await deleteEntity(prisma.equipmentCategory, formData);
}

export async function replaceCategoryDelete(prevState: State, formData: FormData) : Promise<State> {
    return await deleteEntity(prisma.replaceCategory, formData);
}

export async function rentalCategoryDelete(prevState: State, formData: FormData) : Promise<State> {
    return await deleteEntity(prisma.rentalCategory, formData);
}


/* export const actions = {
    brandDelete,
    replaceBrandDelete,
    equipmentCategoryDelete,
    replaceCategoryDelete,
    rentalCategoryDelete
}; */