import { useEffect, useState } from "react"
import MoonIcon from "./iconos/MoonIcon"
import SunIcon from "./iconos/SunIcon"

const Header = () => {

    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
     if(darkMode){
        document.documentElement.classList.add("dark")
     }else{
        document.documentElement.classList.remove("dark")
     }

    },[darkMode])

    const handleClick = () => {

    }
    return(
        <header className="container mx-auto pt-8 px-4">
        <div className="flex justify-between">
            <h1 className="text-3xl uppercase text-white font-bold tracking-[0.5em]">
                kike
            </h1>
            <button onClick={() => setDarkMode(!darkMode)}>
                
                {
                    darkMode ? <SunIcon/> : <MoonIcon/>
                }
            </button>
        </div>

       
    </header>
    )
 }


 export default Header 