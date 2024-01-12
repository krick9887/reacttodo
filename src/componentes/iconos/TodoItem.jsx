import CheckIcon from "./CheckIcon"
import CrosIcon from "./CrosIcon"


const TodoItem = ({ todo }) => { 

const {id, title, completed} = todo

  return(
    <article className="px-4 flex gap-4 py-4  border-b-gray-400 border-b">
   {/*<button className="flex-none rounded-full border-2 w-5 h-5 inline-block ">
      <CheckIcon/>
    </button> */} 
    <button className="flex-none rounded-full border-2 w-5 h-5  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  flex justify-center items-center">
      <CheckIcon/>
    </button>
    <p className="text-gray-600 grow">
        {title}
    </p>
    <button className="">
        <CrosIcon />
    </button>
</article>
  )  
 }

 export default TodoItem