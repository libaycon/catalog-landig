interface Types {
    name: string;
}

const brand: Types[] = [
    { name: 'Konica Minolta' },
    { name: 'Ricoh' },
    { name: 'Kyocera' },
    { name: 'Canon' },
]

const replaceBrand: Types[] = [
    { name: "Konica Minolta"},
    { name: "Ricoh"},
    { name: "Kyocera"},
    { name: "Canon"},
    { name: "Katun"},
    { name: "Katun Performance"},
    { name: "Ikon"},
    { name: "Image"}
]

const EquipmentCategorie: Types[] = [
    { name: 'Impresoras' },
    { name: "Multifuncionales A3" },
    { name: "Multifuncionales A4" },
    { name: "Multifuincionales A4 Color" },
    { name: "Multifuncionales A3 Color" }
]

const rentalCategorie: Types[] = [
    { name: "Impresoras" },
    { name: "Multifuncionales" },
    { name: "Multifuncionales Color" }
]

const replaceCategories: Types[] = [
    { name: 'Toners' },
    { name: 'Tambores' },
    { name: 'Reveladores' },
    { name: "Unidades" },
    { name: "Rodillos de calor"},
    { name: "Cuchillas de limpieza"},
    { name: "Ruedas de casetera"},
    { name: "Fajas de transferencia"},
    { name: "Fajas de fusora"},
    { name: "Kit de mantenimiento"}
]

export {
    brand,
    replaceBrand,
    EquipmentCategorie,
    rentalCategorie,
    replaceCategories
}