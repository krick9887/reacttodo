const TodoFilter = ({changeFilter, filter}) => { 
    return(
        <section className=" container mx-auto  mt-8">
                <div className="dark:bg-gray-900 bg-white p-4 rounded-md flex justify-center gap-4">
                    <button className={`${filter === "all" ? 'text-blue-500 hover:text-gray-400' : 'text-gray-400 hover:text-blue-500'}`} onClick={() => changeFilter('all')}>all</button>
                    <button className={`${filter === 'active' ? 'text-blue-500 hover:text-gray-400' : 'text-gray-400 hover:text-blue-500'}`} onClick={() => changeFilter('active')}>active</button>
                    <button className={`${filter === 'completed' ? 'text-blue-500 hover:text-gray-400' : 'text-gray-400 hover:text-blue-500'}`} onClick={() => changeFilter('completed')}>complete</button>
                </div>
            </section>
        )
 }

 export default TodoFilter