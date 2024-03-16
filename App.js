import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = <h1 id="heading">Namste React using jsx</h1>;

//React Component
const HeadingComponent = () => (
  <div className="container">
    <h1 className="Heading">Namaste React Functional Component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
