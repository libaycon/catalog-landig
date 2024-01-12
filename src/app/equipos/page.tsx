import equipments from "@/data/equipments";
import EquipmentCard from "@/components/cards/equipmentCard";
import PageSidebar from "./pageSidebar";


function Sales(): JSX.Element {
    return (
        <div className="w-full">
            <div className="container m-auto min-h-[calc(100vh-5rem)] pt-4 pb-4 flex flex-row gap-8">
                <PageSidebar />
                <div className="w-full px-4">
                    <div className="grid grid-cols-auto-fit2-1fr justify-items-center gap-6">
                        {equipments.map((equipment, index) => (
                            <EquipmentCard key={`${equipment.id}-${index}`} equipment={equipment} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sales;