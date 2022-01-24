import React, {useState} from "react";

export  default function ListTodosComponent() {
    let [todos, setTodos] = useState([
        {id: 1, description: "todo1", done: false, targetDate: new Date()},
        {id: 2, description: "todo2", done: false, targetDate: new Date()},
    ]);
    return (
        <>
            <h1>List Todos</h1>
            <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Description</th>
                        <th>Done</th>
                        <th>TargetDate</th>
                    </tr>
                    </thead>
                    <tbody>
                    {todos.map(todo => {
                        return (
                            <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>

        </>


    )
}
