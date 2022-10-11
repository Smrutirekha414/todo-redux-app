import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import "./Todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");

  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <div className="chile-div">
          <figure>
            <figcaption>Write your Note here ✍🏽</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="📝 Add Lists..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />

            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </div>

          <div className="showItems">
            {list.map((element) => {
              return (
                <div className="eachItem" key={element.id}>
                  <h3>{element.data}</h3>
                  <div className="todo-btn">
                    <i
                      className="fa fa-trash-alt add-btn"
                      title="DeleteItem"
                      onClick={() => dispatch(deleteTodo(element.id))}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={() => dispatch(removeTodo())}
            >
              <span>Check Lists</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
