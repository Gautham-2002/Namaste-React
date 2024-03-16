import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = <h1 id="heading">Namste React using jsx 🚀 </h1>;

const JsxHeading2 = () => <h1 id="heading">Namste React using jsx 🚀 </h1>;

//Component composition - a component inside another component

//React Component   - a js function which returns jsx/react element
const HeadingComponent = () => (
  <div className="container">
    <JsxHeading2 />
    <h1 className="Heading">Namaste React Functional Component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
