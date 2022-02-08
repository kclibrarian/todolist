import React from "react";

export default function Todo(props) {
    return (
        <li className="todo stack-small">
            <div className="c-cb">
                <input id={props.id} type="checkbox" defaultChecked={props.completed}/>
                <label className="todo-label" htmlFor="todo-1">
                    {props.name}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn">
                    Edit <span className="visually-hidden">Sleep</span>
                </button>
                <button type="button" className="btn btn__danger">
                    Delete <span className="visually-hidden">Sleep</span>
                </button>
            </div>
        </li>
    );
}