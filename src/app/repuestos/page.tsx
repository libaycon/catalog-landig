import PageSidebar from "./pageSidebar";
import replaces from "@/data/replaces";
import ReplaceCard from "@/components/cards/replacesCard";

function ReplacesPage(): JSX.Element {
    return (
        <div className="w-full">
            <div className="container m-auto min-h-[calc(100vh-5rem)] pt-4 pb-4 flex flex-row gap-8">
                <PageSidebar />
                <div className="w-full px-4">
                    <div className="grid grid-cols-auto-fit2-1fr justify-items-center gap-6">
                        {replaces.map((replace, index) => (
                            <ReplaceCard key={`${replace.id}-${index}`} replace={replace} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReplacesPage;