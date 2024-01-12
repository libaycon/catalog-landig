import { PrismaClient } from "@prisma/client";

const prisma =  new PrismaClient();


export async function fetchCardData() {
    try {
        const brands = prisma.brand.findMany(/* {include: {equipment: true}} */);
        const replaceBrands = prisma.replaceBrand.findMany();
        const equipmentCategories = prisma.equipmentCategory.findMany();
        const replaceCategories = prisma.replaceCategory.findMany();
        const rentalCategories = prisma.rentalCategory.findMany();

        return await Promise.all([
            brands,
            replaceBrands,
            equipmentCategories,
            replaceCategories,
            rentalCategories
        ]);
    } catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect();
    }
}