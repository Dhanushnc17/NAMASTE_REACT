import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement() => creates React Element(Object) => root.render => converts it to HTML(Browser Understands)

const heading = React.createElement("h1",{id: "parent"},"ABD17")

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
