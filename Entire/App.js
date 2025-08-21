import React from "react";
import ReactDOM from "react-dom/client";

const ele = <span>ReactElement</span>;

const titleElement = (
  <h1>
    {ele}
    {" " + 17}
    Title Element Using Jsx...!!
  </h1>
);

const TitleComponent = () => (
  <div className="title" tabIndex="3">
    {titleElement}
    TitleComponent using JSX(component Composition)...!!
  </div>
);

// React Functional Component
// Component Composition
const HeadingComponent = () => (
  <div id="parent">
    <TitleComponent />
    {/* 2) <TitleComponent>
    </TitleComponent> 
    3) {TitleComponent()}
    */}
    <h1 className="heading">Namate React Using Functional Component..!!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
