import Table from "@/app/ui/dashboard/equipmetstable";
import NewUploadBTN from "@/app/ui/newAndUpload";

export default function Equipments ():JSX.Element {
    return (
        <div className="p-6">
            <div className="flex flex-wrap items-center gap-3 py-4 tablet:py-12">
                <span className="text-2xl">Equipos</span>
                <NewUploadBTN 
                    pushLink="/dashboard/equipments/new"
                    uploadLInk="/dashboard/equipments/upload"
                />
            </div>
            <Table />
        </div>
    )
}