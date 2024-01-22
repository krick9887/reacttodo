import CheckIcon from "./CheckIcon";
import CrosIcon from "./CrosIcon";

const TodoItem = ({ todo, removeTodo, updateTodo}) => {
    const { id, title, completed } = todo;

    return (
        <article className="px-4 flex gap-4 py-4  border-b-gray-400 border-b dark:bg-gray-800">
            {/*<button className="flex-none rounded-full border-2 w-5 h-5 inline-block ">
      <CheckIcon/>
    </button> */}
            

            <button className={`h-6 w-6 rounder-full border-2 rounded-2xl ${completed ? "   bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 grid place-items-center" : "  flex justify-center items-center"} `} 
            onClick={() => updateTodo(id)}>
              
              {
                completed && <CheckIcon />
              }
                
            </button> 

            <p className={`text-gray-600 grow dark:text-gray-400 ${completed && "line-through" }`}>{title}</p>
            <button className="flex-none" onClick={() => removeTodo(id)}>
                <CrosIcon />
            </button>
        </article>
    );
};

export default TodoItem;
