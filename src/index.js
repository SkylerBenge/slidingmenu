import React from "react";
import ReactDOM from "react-dom";
import MenuContainer from "./MenuContainer";
import "./style.css";

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <MenuContainer/>
    </div>,
    destination
);