import React from "react";
import CrosIcon from "./componentes/iconos/CrosIcon";
import MoonIcon from "./componentes/iconos/MoonIcon";


const App = () => {
    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
            <header className="container mx-auto pt-8 px-4">
                <div className="flex justify-between">
                    <h1 className="text-3xl uppercase text-white font-bold tracking-[0.5em]">
                        kike
                    </h1>
                    <button>
                        <MoonIcon className="fill-red-400"/>
                    </button>
                </div>

                <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center py-4s mt-8">
                    <span className="rounded-full border-2 w-5 h-5 inline-block "></span>
                    <input
                        type="text"
                        placeholder="crea una nueva tarea"
                        className="w-full text-gray-400 outline-none"
                    />
                </form>
            </header>

            <main className="container mx-auto px-4 mt-8">
                <div className="bg-white rounded-md [&>article]: p-4">
                    <article className="px-4 flex gap-4 py-4 border-b-gray-400 border-b">
                        <button className="flex-none rounded-full border-2 w-5 h-5 inline-block "></button>   
                        <p className="text-gray-600 grow">completar curso de js</p>
                        <button className="">
                            <CrosIcon />
                        </button>
                    </article>

                    <article className="px-4 flex gap-4 py-4 border-b-gray-400 border-b">
                        <button className="flex-none rounded-full border-2 w-5 h-5 inline-block "></button>
                        <p className="text-gray-600 grow">completar curso de js</p>
                        <button className="">
                            <CrosIcon />
                        </button>
                    </article>

                    <article className="px-4 flex gap-4 py-4 border-b-gray-400 border-b">
                        <button className="flex-none rounded-full border-2 w-5 h-5 inline-block "></button>
                        <p className="text-gray-600 grow">completar curso de js</p>
                        <button className="">
                            <CrosIcon />
                        </button>
                    </article>

                    <section className="py-4 px-4 flex justify-between">
                        <span className="text-gray-400">5 items left</span>
                        <button className="text-gray-400">clear completed</button>
                    </section>
                </div>
            </main>
            <section className="container mx-auto px-4 mt-8">
                <div className="bg-white p-4 rounded-md flex justify-center gap-4">
                <button className="text-blue-500">all</button>
                <button className="hover:text-blue-500">active</button>
                <button className="hover:text-blue-500">complete</button>
                </div>
                
            </section>

            <p className="text-center mt-8">drag and drop to reorder list</p>
        </div>
    );
};

export default App;
