interface Column {
    name: string;
    uid: string;
}

interface RentalPlan {
    id: number;
    brand: string;
    model: string;
    mode: string;
    limitOfPrints: number;
    typeOfPlan: string;
    image: string;
    description: string;
    status: string;
}


export type { Column, RentalPlan };