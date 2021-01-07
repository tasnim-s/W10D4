import React from "react";
import ReactDOM from "react-dom"
import store from './frontend/store/store'

window.store = store

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(store, root);
});