const { PrismaClient } = require('@prisma/client');
const {
    brand,
    replaceBrand,
    EquipmentCategorie,
    rentalCategorie,
    replaceCategories
} = require("@/app/lib/backgrounds/categories");

const prisma = new PrismaClient();

async function addBrand() {
    try {
        brand.map(async (item) => {
            await prisma.brand.create({
                data: item
            });
        });
    } catch (error) {
        console.log(error);
    }
}

async function addReplaceBrand() {
    try {
        replaceBrand.map(async (item) => {
            await prisma.replaceBrand.create({
                data: item
            });
        });
    } catch (error) {
        console.log(error);
    }
}

async function addEquipmentCategorie() {
    try {
        EquipmentCategorie.map(async (item) => {
            await prisma.equipmentCategory.create({
                data: item
            });
        });
    } catch (error) {
        console.log(error);
    }
}

async function addRentalCategorie() {
    try {
        rentalCategorie.map(async (item) => {
            await prisma.rentalCategory.create({
                data: item
            });
        });
    } catch (error) {
        console.log(error);
    }
}

async function addReplaceCategories() {
    try {
        replaceCategories.map(async (item) => {
            await prisma.replaceCategory.create({
                data: item
            });
        });
    } catch (error) {
        console.log(error);
    }
}



async function main() {
    await addBrand();
    await addReplaceBrand();
    await addEquipmentCategorie();
    await addRentalCategorie();
    await addReplaceCategories();
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });