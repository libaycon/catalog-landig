import NewUploadBTN from "@/app/ui/newAndUpload";
import Table from "@/app/ui/dashboard/replacestable";


export default function Replaces():JSX.Element {
    return (
        <div className="p-6">
            <div className="flex flex-wrap items-center gap-3 py-4 tablet:py-12">
                <span className="text-2xl">Repuestos</span>
                <NewUploadBTN 
                    pushLink="/dashboard/replaces/new"
                    uploadLInk="/dashboard/replaces/upload"
                />
            </div>
            <Table />
        </div>
    )
}