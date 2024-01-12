'use server';

import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { State } from "@/types/formState";


const prisma = new PrismaClient();

const addSchema = z.object({
    id: z.number(),
    name: z.string({ required_error: "Nombre de marca es requirida" }).min(2, { message: "El nombre de la marca debe tener al menos 2 caracteres" }),
    createdAt: z.string(),
    updatedAt: z.string()
});

const AddToDb = addSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true
})

export async function createReplaceBrand(prevState: State, formData: FormData) {
    const validationFields = AddToDb.safeParse({
        name: formData.get('name')
    });

    if(!validationFields.success) return {
        errors: validationFields.error.flatten().fieldErrors,
    };

    try {
        await prisma.replaceBrand.create({
            data: {name: validationFields.data.name}
        });
    } catch (error) {
        return {
            errors: {name: ["Ocurrió un error al crear la marca, es posible que ya exista"]},
        }
    }

    return {
        message: "La marca se ha creado correctamente"
    }
}