import { useState } from "react"

const Form = ({todoCreate}) => { 

    const [title, setTitle] = useState('')
   const handleSubmitAssTodo=(e)=>{
    e.preventDefault()
  

    if(!title.trim()){
        return setTitle("")
    }

    todoCreate(title)

    setTitle("")

   }

    return(
        <form onSubmit={handleSubmitAssTodo}  className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center  ">
                    <span className="rounded-full border-2 w-5 h-5 inline-block "></span>
                    <input
                        type="text"
                        placeholder="crea una nueva tarea"
                        className="w-full text-gray-400 outline-none"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </form>
    )
 }

 export default Form
 