const TodoFilter = () => { 
    return(
        <section className="container mx-auto  mt-8">
                <div className="bg-white p-4 rounded-md flex justify-center gap-4">
                    <button className="text-blue-500">all</button>
                    <button className="hover:text-blue-500">active</button>
                    <button className="hover:text-blue-500">complete</button>
                </div>
            </section>
        )
 }

 export default TodoFilter