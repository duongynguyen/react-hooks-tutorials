import React, { useState, useEffect } from "react";
import queryString from "query-string";

import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import PostFiltersForm from "./components/PostFiltersForm";
import Clock from "./components/Clock";
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
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: ""
  });

  useEffect(() => {
    async function fecthPostList() {
      try {
        const paramString = queryString.stringify(filters);
        // codesandbox chỉ chấp nhận fetch với https
        const requestUrl = `https://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;

        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Get post list had error: ", error);
      }
    }

    fecthPostList();
  }, [filters]);

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

  // function handlePageChange(newPage) {
  //   setFilters({
  //     ...filters,
  //     _page: newPage
  //   });
  // }

  // function handleFilterChange(newFilter) {
  //   setFilters({
  //     ...filters,
  //     _page: 1,
  //     title_like: newFilter.searchTerm
  //   });
  // }

  return (
    <div className="app">
      <h1>React Hooks - Clock</h1>
      {/* <ColorBox /> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
      {/* <TodoForm onSubmit={handleSubmitForm} /> */}
      {/* <PostFiltersForm onSubmit={handleFilterChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
      <Clock />
    </div>
  );
}
