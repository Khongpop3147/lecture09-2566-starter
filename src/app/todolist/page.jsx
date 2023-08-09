"use client";

import { useState } from "react";
import { Task } from "./Task";
import { nanoid } from "nanoid";

export default function TodolistPage() {
  const [taskInput, setTaskInput] = useState("");
  // tasks = array of {id:string, title: string}
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "HEE",
    },
    {
      id: "2",
      title: "HEEYAI",
    },
    {
      id: "3",
      title: "HEE",
    },
    {
      id: "4",
      title: "HE",
    },
  ]);
  const taskInputOnChange = (event) => {
    setTaskInput(event.target.value);
  };

  const addTask = (newTaskTitle) => {
    const newTask = { id: nanoid(), title: newTaskTitle };
    // ! make a new array based on old "tasks" and add newTask at last one
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const addTaskBtnOnClick = () => {
    addTask(taskInput);
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks);
  }

  return (
    <div style={{ maxWidth: "400px" }} className="mx-auto">
      <h3 className="text-center">Simple Todo List</h3>
      <div className="d-flex">
        <input
          className="form-control d-inline mx-1"
          placeholder="Insert task"
          style={{ width: "250px" }}
          onChange={taskInputOnChange}
          value={taskInput}
        />
        <button className="btn btn-primary " onClick={addTaskBtnOnClick}>
          Add task
        </button>
      </div>
      {tasks.map((task) => (
        <Task id={task.id}
         title={task.title} 
         key={task.id} 
         deleteFunc={deleteTask}/>
      ))}
    </div>
  );
}