/*
    React.createElement() => ReactElement(Object) => root.render() => HTML(Browser Understands)

/*
  <div id ="root">
    <h1>Hello World Using React...!!</h1>
  </div>
*
*
*


const heading = React.createElement("h1",
{id: "heading",abd: "17"},
"Hello World Using React...!!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

*/

/*
  <div id ="root">
    <div id ="parent">
      <div id ="child1">
        <h1>I'm h1 tag in child1</h1>
        <h2>I'm h2 tag in child1</h2>
      </div>
      <div id ="child2">
        <h1>I'm h1 tag in child2</h1>
        <h2>I'm h2 tag in child2</h2>
      </div>
    </div>
  </div>
*
*
*

*/


const heading = React.createElement("div",{id: "parent"},
  [
    React.createElement("div",{id: "child1"},
    [React.createElement("h1",{},"I'm h1 tag in child1...!!"),
    React.createElement("h2",{},"I'm h2 tag in child1...!!")
    ]),
    React.createElement("div",{id: "child2"},
    [React.createElement("h1",{},"I'm h1 tag in child2...!!"),
    React.createElement("h2",{},"I'm h2 tag in child2...!!")
    ])
  ], 
  );    // JSX simplifies this

  console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);



