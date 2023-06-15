import DashNavboard from "./DashNavbar"
import Dashboard from "./Dashboard"
import { createContext,useState } from "react"
import { HomeContext } from "./Context/Context"

function Home(){
    
    const [fromDate, setFromDate]=useState()
    const [toDate, setToDate]=useState()
    const [searchText, setSearchText] = useState("");
    return(
        <div>
            <HomeContext.Provider value={{fromDate,setFromDate,toDate,setToDate,searchText, setSearchText,searchText, setSearchText }} >
            <DashNavboard/>
            <Dashboard/>

            </HomeContext.Provider>
        </div>
    )

}export default Home
