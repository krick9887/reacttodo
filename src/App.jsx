import React, { useState } from "react";
import CrosIcon from "./componentes/iconos/CrosIcon";
import Header from "./componentes/Header";
import Form from "./componentes/Form";
import TodoList from "./componentes/iconos/TodoList";
import TodoComputed from "./componentes/iconos/TodoComputed";
import TodoFilter from "./componentes/iconos/TodoFilter";

const initialStateTodos = [
    {id: 1, title: "aprender react", completed: true},
    {id: 2, title: "ir al cine", completed: false},
    {id: 3, title: "ir a vender", completed: true},
    {id: 4, title: "ir a comer", completed: false}
    

]

const App = () => {

   const [todos, setTodos] = useState(initialStateTodos)
   console.log(initialStateTodos)
   
   const todoCreate= (title) =>{
    const newTodo={
        id: Date.now,
        title,
        complete: true
    }
    setTodos([...todos, newTodo])
   }

   const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id ))
   }

   const updateTodo = (id) => {
    setTodos(todos.map(
        todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
   }

    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
            <Header />

            <main className="container mx-auto px-4 mt-8">
                <Form todoCreate={todoCreate} />

                <TodoList
                    todos={todos}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />

                <TodoComputed /> 

                <TodoFilter />
            </main>

            <footer className="text-center mt-8">
                drag and drop to reorder list
            </footer>
        </div>
    );
};

export default App;
