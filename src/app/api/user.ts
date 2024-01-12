import { PrismaClient } from "@prisma/client";


export const prisma = new PrismaClient();
async function main() {
    const user = await prisma.user.create({
        data: {
            email: "jose@gmail.com",
            name: "Jose1234",
            password: "12345678",
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })

export default main;