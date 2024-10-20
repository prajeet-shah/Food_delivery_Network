import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "h1" }, "I am h1 tag"),
    React.createElement("h2", { id: "h2" }, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "h1" }, "I am h1 tag"),
    React.createElement("h2", { id: "h2" }, "I am h2 tag"),
  ]),
]);

// ReactElement(Object) ==> HTML(Browser Understands)
// console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
