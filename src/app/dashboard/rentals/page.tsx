import NewUploadBTN from "@/app/ui/newAndUpload";
import Table from "@/app/ui/dashboard/rentalstable";


export default function Rentals():JSX.Element {
    return (
        <div className="p-6">
            <div className="flex flex-wrap items-center gap-3 py-4 tablet:py-12">
                <span className="text-2xl">Alquiler</span>
                <NewUploadBTN
                    pushLink="/dashboard/rentals/new"
                    uploadLInk="/dashboard/rentals/upload"
                />
            </div>
            <Table />
        </div>
    )
}