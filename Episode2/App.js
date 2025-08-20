import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div",{id: "parent"},[
    React.createElement("div",{id: "child1",key: "child1"},[
      React.createElement("h1",{key: "h11"},"I'm h1 tag in child1...!!"),
      React.createElement("h2",{key: "h21"},"I'm h2 tag in child1...!!")
    ]),
    React.createElement("div",{id: "child2",key: "child2"},[
      React.createElement("h1",{key: "h12"},"I'm h1 tag in child2...!!"),
      React.createElement("h2",{key: "h22"},"I'm h2 tag in child2...!!")
    ])
  ]);    // JSX simplifies this

  console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
