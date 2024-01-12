import MoonIcon from "./iconos/MoonIcon"

const Header = () => {
    return(
        <header className="container mx-auto pt-8 px-4">
        <div className="flex justify-between">
            <h1 className="text-3xl uppercase text-white font-bold tracking-[0.5em]">
                kike
            </h1>
            <button>
                <MoonIcon className="fill-white" />
            </button>
        </div>

       
    </header>
    )
 }


 export default Header 