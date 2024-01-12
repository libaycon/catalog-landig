import DashboardElements from "./dashboardElements";
import { fetchCardData } from "../lib/fetching/fetchData";


export default async function Page() {
    const data = await fetchCardData();
    
    return (<DashboardElements data={data} />)
}