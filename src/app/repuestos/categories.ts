import Category from "@/types/categories";

const categories: Category[] = [
    {
        title: "Marca",
        list: [
            { value: "konica-minolta", label: "Konica Minolta" },
            { value: "canon", label: "Canon" },
            { value: "ricoh", label: "Ricoh" },
            { value: "kyocera", label: "Kyocera" },
            { value: "otro", label: "Otro" },
        ]
    },
    {
        title: "Por Caracteristica",
        list: [
            { value: "multifuncional-color", label: "Multifuncional Color" },
            { value: "multifuncional-monocromatico", label: "Multifuncional Monocromático" },
            { value: "formato-a3", label: "Formato A3" },
            { value: "formato-a4", label: "Formato A4" },
            { value: "equipo-de-mesa", label: "Equipo de mesa" },
            { value: "para-oficina", label: "Para oficina" },
            { value: "produccion", label: "Producción" },
            { value: "escaner", label: "Escáner" },
            { value: "plotter", label: "Plotter" },
            { value: "otro", label: "Otro" },
        ]
    }
];

export default categories;