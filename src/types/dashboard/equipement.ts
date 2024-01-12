interface Column {
    name: string;
    uid: string;
}

interface Equipment {
    id: number;
    code: string;
    image: string;
    gallery: string[];
    name: string;
    brand: string;
    model: string;
    description: string;
    status: string;
}


export type { Column, Equipment };