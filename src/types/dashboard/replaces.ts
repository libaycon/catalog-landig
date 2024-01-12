interface Column {
    name: string;
    uid: string;
}

interface Replace {
    id: number;
    name: string;
    code: string;
    forBrand: string;
    brand: string;
    forModel: string;
    partCode: string;
    image: string;
    gallery: string[];
    features: string[];
    description: string;
    status: string;
}


export type { Column, Replace };