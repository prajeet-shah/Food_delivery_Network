import React from "react";
import ReactDOM from "react-dom/client";

// JSX ->Babel transpiled -> ReactElement -> Js object -> HTMLElement(render)

const Title = () => <h1>Namaste React </h1>;

const Heading = () => (
  <>
    <Title />
    <h1>hello world from functional component</h1>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
