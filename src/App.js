import React, { useState, useEffect } from "react";
import PostList from "./components/PostList";
// import ColorBox from "./components/ColorBox";
// import TodoList from "./components/TodoList";
// import TodoForm from "./components/TodoForm";

export default function App() {
  // const [todoList, setTodoList] = useState([
  //   { id: 1, title: "I love develop" },
  //   { id: 2, title: "We love develop" },
  //   { id: 3, title: "They love develop" }
  // ]);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fecthPostList() {
      try {
        // codesandbox chỉ chấp nhận fetch với https
        const requestUrl =
          "https://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data } = responseJSON;

        setPostList(data);
      } catch (error) {
        console.log("Get post list had error: ", error);
      }
    }

    fecthPostList();
  }, []);

  // function handleTodoClick(todo) {
  //   const index = todoList.findIndex(x => x.id === todo.id);
  //   if (index < 0) return;

  //   const newTodoList = [...todoList];
  //   newTodoList.splice(index, 1);
  //   setTodoList(newTodoList);
  // }

  // function handleSubmitForm(values) {
  //   const newTodo = {
  //     id: todoList[todoList.length] + 1,
  //     ...values
  //   };
  //   const newTodoList = [...todoList];
  //   newTodoList.push(newTodo);
  //   setTodoList(newTodoList);
  // }

  return (
    <div className="app">
      <h1>React Hooks - PostList</h1>
      {/* <ColorBox /> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
      {/* <TodoForm onSubmit={handleSubmitForm} /> */}
      <PostList posts={postList} />
    </div>
  );
}
