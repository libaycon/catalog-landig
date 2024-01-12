import Sidebar from "../ui/dashboard/sidenav";


function DashboardLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <div className="flex h-screen flex-col tablet:flex-row tablet:overflow-hidden bg-white dark:bg-bg-primary">
            <div className="w-full flex-none tablet:w-64">
                <Sidebar />
            </div>
            <div className="flex-grow overflow-y-auto">
                {children}
            </div>
        </div>
    );
}

export default DashboardLayout;