'use server';

import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { filesystem } from './fileSave';


const prisma = new PrismaClient();

const fileSchema = z.object({
    name: z.string(),
    type: z.string(),
    size: z.number(),
    lastModified: z.number(),
});

const ReplaceSchema = z.object({
    id: z.number(),
    name: z.string({ invalid_type_error: "El nombre del repuesto es requerido" }),
    shortCode: z.string().nullable(),
    partNumber: z.string().nullable(),
    brandId: z.number({ invalid_type_error: "La marca del repuesto es requerida" }),
    compatibility: z.string().nullable(),
    toBrandId: z.number({ invalid_type_error: "La marca de equipo es requerida" }),
    categoryId: z.number().optional().nullable(),
    image: fileSchema.nullable(),
    gallery: fileSchema.nullable(),
    features: z.string().optional().nullable(),
    description: z.string({ invalid_type_error: "La descripción es requerida" }),
    createdAt: z.string(),
    updatedAt: z.string()
});

const CreateReplace = ReplaceSchema.omit({
    id: true,
    brandId: true,
    toBrandId: true,
    categoryId: true,
    createdAt: true,
    updatedAt: true
});

export type State = {
    errors?: {
        name?: string[];
        shortCode?: string[];
        partNumber?: string[];
        brandId?: string[];
        compatibility?: string[];
        toBrandId?: string[];
        categoryId?: string[];
        image?: string[];
        gallery?: string[];
        features?: string[];
        description?: string[];
    };
    message?: string | null
}

export async function createReplace(prevState: State, formData: FormData): Promise<State> {
    const image = formData.get('image') as File;
    const gallery = formData.getAll('gallery') as File[];
    const validationdFields = CreateReplace.safeParse({
        name: formData.get('name'),
        shortCode: formData.get('shortCode'),
        partNumber: formData.get('partNumber'),
        brandId: formData.get('brandId'),
        compatibility: formData.get('compatibility'),
        toBrandId: formData.get('toBrandId'),
        categoryId: formData.get('categoryId'),
        image: formData.get('image'),
        gallery: formData.get('gallery'),
        features: formData.get('features'),
        description: formData.get('description')
    });
    //console.log(validationdFields);
    if (!validationdFields.success) {
        return {
            errors: validationdFields.error.flatten().fieldErrors,
            message: "Los campos no son válidos"
        };
    }

    try {
        const data = validationdFields.data;
        //filesystem(image);
        await prisma.replaces.create({
            data: {
                name: data.name,
                shortCode: data.shortCode,
                partNumber: data.partNumber,
                brandId: Number(formData.get('brandId')),
                compatibility: data.compatibility,
                toBrandId: Number(formData.get('toBrandId')) || null,
                categoryId: Number(formData.get('categoryId')) || null,
                image: image?.name,
                gallery: `["${gallery.map(file => file.name).join('","')}"]`,
                features: data.features,
                description: data.description
            }
        });
    } catch (e) {
        console.log(e)
        return {
            message: "No se pudo crear el repuesto"
        }
    }

    return {
        message: "Repuesto creado"
    }
}